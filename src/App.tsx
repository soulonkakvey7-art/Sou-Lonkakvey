/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { EnglishLevel, Question, Lesson, Subject } from "./types";
import { QUESTIONS } from "./data/questions";
import { LESSONS } from "./data/lessons";
import { VOCAB_QUESTIONS } from "./data/vocabQuestions";
import { VOCAB_LESSONS } from "./data/vocabLessons";
import { LevelSelector } from "./components/LevelSelector";
import { Quiz } from "./components/Quiz";
import { LessonList } from "./components/LessonList";
import { LessonView } from "./components/LessonView";
import { Toaster } from "./components/ui/sonner";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, MapPin, MessageSquare, Search } from "lucide-react";
import { SearchOverlay } from "./components/SearchOverlay";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState<Subject>('grammar');
  const [selectedLevel, setSelectedLevel] = useState<EnglishLevel | null>(null);
  const [mode, setMode] = useState<'lesson' | 'test' | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [currentTopic, setCurrentTopic] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const ALL_QUESTIONS = [...QUESTIONS, ...VOCAB_QUESTIONS];
  const ALL_LESSONS = [...LESSONS, ...VOCAB_LESSONS];

  const handleSelect = (level: EnglishLevel, selectedMode: 'lesson' | 'test' | 'overall', topic?: string) => {
    setSelectedLevel(level);
    setCurrentTopic(topic || null);
    setMode(selectedMode === 'overall' ? 'test' : selectedMode);

    const relevantQuestions = ALL_QUESTIONS.filter(q => {
      const isSubj = (q.subject || 'grammar') === currentSubject;
      const isTopic = topic ? q.topic === topic : true;
      return isSubj && isTopic;
    });

    if (selectedMode === 'test') {
      const filtered = relevantQuestions.filter(q => level === 'General' ? true : q.level === level)
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);
      setQuizQuestions(filtered);
    } else if (selectedMode === 'overall') {
      const allLevels: EnglishLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
      const mixedQuestions: Question[] = [];
      
      // Pick 3 from each level (18 total)
      allLevels.forEach(lvl => {
        const lvlQuestions = relevantQuestions.filter(q => q.level === lvl)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);
        mixedQuestions.push(...lvlQuestions);
      });

      // Add 2 random from any level to make it 20
      const remainingQuestions = relevantQuestions.filter(q => !mixedQuestions.includes(q))
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);
      mixedQuestions.push(...remainingQuestions);

      setQuizQuestions(mixedQuestions.sort(() => Math.random() - 0.5));
      setMode('test');
    } else {
      setCurrentLesson(null);
    }
  };

  const currentLevelLessons = selectedLevel 
    ? ALL_LESSONS.filter(l => {
        const isLevel = selectedLevel === 'General' ? true : l.level === selectedLevel;
        const isSubj = (l.subject || 'grammar') === currentSubject;
        const isTopic = currentTopic ? (
          Array.isArray(l.tags) ? l.tags.includes(currentTopic) : l.topic === currentTopic
        ) : true;
        return isLevel && isSubj && isTopic;
      })
    : [];

  const handleBack = () => {
    if (mode === 'lesson' && currentLesson) {
      setCurrentLesson(null);
    } else {
      setSelectedLevel(null);
      setCurrentTopic(null);
      setMode(null);
      setQuizQuestions([]);
      setCurrentLesson(null);
    }
  };

  const handleSelectLessonFromSearch = (lesson: Lesson) => {
    setCurrentSubject(lesson.subject || 'grammar');
    setSelectedLevel(lesson.level);
    setMode('lesson');
    setCurrentLesson(lesson);
    setCurrentTopic(lesson.topic || null);
  };

  const isOverall = mode === 'test' && quizQuestions.length > 10;

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={handleBack}
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center transition-transform group-hover:rotate-12">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">LingoCheck</span>
          </div>
          
          <div className="hidden md:flex items-center gap-4 p-1 bg-slate-100 rounded-lg">
            <button 
              onClick={() => { setCurrentSubject('grammar'); handleBack(); }}
              className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${currentSubject === 'grammar' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Grammar
            </button>
            <button 
              onClick={() => { setCurrentSubject('vocab'); handleBack(); }}
              className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${currentSubject === 'vocab' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Vocabulary
            </button>
          </div>

          <div className="flex items-center gap-3">
             <button 
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-all active:scale-95 border border-slate-200 group"
             >
                <Search className="w-4 h-4" />
                <span className="hidden lg:inline text-xs font-bold uppercase tracking-wider">Search</span>
                <span className="hidden md:flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-400 group-hover:border-blue-200 group-hover:text-blue-400 transition-colors">
                  <kbd>⌘</kbd>K
                </span>
             </button>
             <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-md">
                <MessageSquare className="w-4 h-4" />
                Support
             </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 md:py-20 min-h-[calc(100vh-64px-300px)]">
        <AnimatePresence mode="wait">
          {!selectedLevel ? (
            <motion.div
              key="selector"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <LevelSelector 
                subject={currentSubject}
                onSelect={(l, m, t) => handleSelect(l, m === 'lesson' ? 'lesson' : (m === 'test' ? 'test' : 'overall'), t)} 
              />
            </motion.div>
          ) : mode === 'lesson' && !currentLesson ? (
            <motion.div
              key="lesson-list"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <LessonList 
                level={selectedLevel}
                lessons={currentLevelLessons}
                onSelectLesson={(lesson) => setCurrentLesson(lesson)}
                onBack={handleBack}
              />
            </motion.div>
          ) : mode === 'lesson' && currentLesson ? (
            <motion.div
              key="lesson-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <LessonView 
                lesson={currentLesson} 
                onBack={handleBack} 
                onStartTest={() => {
                  const topicQuestions = ALL_QUESTIONS.filter(q => 
                    (selectedLevel === 'General' ? true : q.level === selectedLevel) && 
                    (q.subject || 'grammar') === currentSubject &&
                    q.topic === currentLesson.topic
                  );
                  
                  const otherLevelQuestions = ALL_QUESTIONS.filter(q => 
                    (selectedLevel === 'General' ? true : q.level === selectedLevel) && 
                    (q.subject || 'grammar') === currentSubject &&
                    q.topic !== currentLesson.topic
                  );

                  const combined = [...topicQuestions.sort(() => Math.random() - 0.5), ...otherLevelQuestions.sort(() => Math.random() - 0.5)]
                    .slice(0, 20);
                  
                  setQuizQuestions(combined);
                  setMode('test');
                }} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Quiz 
                level={isOverall ? 'Overall' : selectedLevel!} 
                questions={quizQuestions} 
                onFinish={handleBack}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="border-t bg-slate-50 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <span className="font-bold text-lg">LingoCheck</span>
              </div>
              <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                Empowering learners worldwide with AI-driven English assessment and personalized feedback. 
                Built for students, professionals, and language enthusiasts.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">CEFR Levels</h4>
              <ul className="space-y-2 text-sm font-medium text-slate-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">A1 - Beginner</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">B1 - Intermediate</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">C1 - Advanced</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">All Assessments</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Legal</h4>
              <ul className="space-y-2 text-sm font-medium text-slate-600">
                 <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                 <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                 <li><a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 gap-4">
            <p className="text-xs text-slate-400 font-medium font-mono">
              © 2026 LINGOCHECK AI. POWERED BY GEMINI 3 FLASH.
            </p>
            <div className="flex gap-6">
              <span className="text-xs text-slate-400 font-medium hover:text-blue-600 cursor-pointer transition-colors">TWITTER</span>
              <span className="text-xs text-slate-400 font-medium hover:text-blue-600 cursor-pointer transition-colors">LINKEDIN</span>
              <span className="text-xs text-slate-400 font-medium hover:text-blue-600 cursor-pointer transition-colors">INSTAGRAM</span>
            </div>
          </div>
        </div>
      </footer>
      <Toaster position="bottom-right" />
      
      <SearchOverlay 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        lessons={ALL_LESSONS}
        onSelectLesson={handleSelectLessonFromSearch}
      />
    </div>
  );
}
