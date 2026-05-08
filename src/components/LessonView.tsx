/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import { Lesson } from "../types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, BookOpen, CheckCircle2, PlayCircle, Zap, Volume2, Sparkles, Loader2 } from "lucide-react";
import { Separator } from "./ui/separator";
import { LessonActivityComponent } from "./LessonActivity";
import { generateExampleSentence } from "../services/gemini";

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
  onStartTest: () => void;
}

export function LessonView({ lesson, onBack, onStartTest }: LessonViewProps) {
  const [aiSentences, setAiSentences] = useState<Record<string, string>>({});
  const [loadingWords, setLoadingWords] = useState<Record<string, boolean>>({});

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleGenerateAISentence = async (word: string, definition: string) => {
    setLoadingWords(prev => ({ ...prev, [word]: true }));
    try {
      const sentence = await generateExampleSentence(word, definition, lesson.level);
      setAiSentences(prev => ({ ...prev, [word]: sentence }));
    } finally {
      setLoadingWords(prev => ({ ...prev, [word]: false }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack} className="rounded-full hover:bg-slate-100">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>
        <Separator orientation="vertical" className="h-6" />
        <Badge className="bg-blue-600">CEFR {lesson.level}</Badge>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <section className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">{lesson.content.title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {lesson.description}
            </p>
          </section>

          {lesson.grammarDetail && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="w-24 h-24 text-blue-600" />
              </div>
              <div className="relative space-y-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest">Grammar Spotlight</span>
                </div>
                <div className="max-w-none text-slate-600 space-y-4 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>p]:leading-relaxed [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:bg-blue-100/30 [&>blockquote]:p-4 [&>blockquote]:rounded-r-lg [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1">
                  <ReactMarkdown>{lesson.grammarDetail}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          )}

          {lesson.content.sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <div className="w-2 h-6 bg-blue-500 rounded-full" />
                    {section.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    {section.content}
                  </p>
                  
                  {section.wordList && section.wordList.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-500" />
                        Vocabulary List
                      </h4>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {section.wordList.map((item, w_i) => (
                          <div key={w_i} className="flex flex-col rounded-2xl bg-white border border-slate-200 overflow-hidden group hover:border-blue-400 transition-all shadow-sm hover:shadow-md">
                            {item.imageUrl && (
                              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                                <img 
                                  src={item.imageUrl} 
                                  alt={item.word}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            )}
                            <div className="p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-black text-blue-600">{item.word}</span>
                                <div className="flex items-center gap-1">
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-8 w-8 rounded-full text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                                    onClick={() => handleGenerateAISentence(item.word, item.definition)}
                                    disabled={loadingWords[item.word]}
                                    title="Generate AI sentence"
                                  >
                                    {loadingWords[item.word] ? (
                                      <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                      <Sparkles className="h-4 w-4" />
                                    )}
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-8 w-8 rounded-full text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                                    onClick={() => speak(item.word)}
                                    title="Listen pronunciation"
                                  >
                                    <Volume2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {item.definition}
                              </p>
                              {(item.example || aiSentences[item.word]) && (
                                <div className="pt-2 border-t border-slate-50 space-y-2">
                                  {item.example && (
                                    <div className="flex items-start justify-between gap-2">
                                      <p className="text-[13px] text-slate-400 font-medium italic">
                                        "{item.example}"
                                      </p>
                                      <Button 
                                        variant="ghost" 
                                        size="icon" 
                                        className="h-6 w-6 rounded-full text-slate-300 hover:text-blue-500 hover:bg-blue-50 shrink-0"
                                        onClick={() => speak(item.example!)}
                                        title="Listen example"
                                      >
                                        <Volume2 className="h-3 w-3" />
                                      </Button>
                                    </div>
                                  )}
                                  {aiSentences[item.word] && (
                                    <motion.div 
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      className="flex items-start justify-between gap-2 p-2 rounded-lg bg-blue-50/50 border border-blue-100/50"
                                    >
                                      <p className="text-[13px] text-blue-700 font-medium italic leading-snug">
                                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-black bg-blue-600 text-white uppercase tracking-tighter mr-1.5">AI</span>
                                        "{aiSentences[item.word]}"
                                      </p>
                                      <Button 
                                        variant="ghost" 
                                        size="icon" 
                                        className="h-6 w-6 rounded-full text-blue-400 hover:text-blue-600 hover:bg-blue-100 shrink-0"
                                        onClick={() => speak(aiSentences[item.word])}
                                        title="Listen AI sentence"
                                      >
                                        <Volume2 className="h-3 w-3" />
                                      </Button>
                                    </motion.div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.examples && section.examples.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <PlayCircle className="w-4 h-4 text-blue-500" />
                        Examples
                      </h4>
                      <div className="grid gap-2">
                        {section.examples.map((ex, i) => (
                          <div key={i} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 group/ex">
                            <div className="flex items-center gap-3 text-sm font-medium text-slate-600 italic">
                              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                              <div className="flex flex-wrap">
                                <span>"</span>
                                {ex.split(/(\s+)/).map((part, p_i) => {
                                  const cleanWord = part.trim().replace(/[.,!?;:"]/g, '');
                                  const wordData = section.wordList?.find(w => w.word.toLowerCase() === cleanWord.toLowerCase());
                                  
                                  if (wordData) {
                                    return (
                                      <span key={p_i} className="relative group/word cursor-help whitespace-pre">
                                        <span className="text-blue-600 font-bold decoration-blue-200 decoration-dotted underline underline-offset-4 hover:decoration-blue-500 hover:text-blue-700 transition-all">
                                          {part}
                                        </span>
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-slate-900 text-white text-[11px] rounded-xl opacity-0 invisible group-hover/word:opacity-100 group-hover/word:visible transition-all z-50 shadow-2xl pointer-events-none normal-case not-italic">
                                          <div className="font-black text-blue-400 mb-1 uppercase tracking-wider">{wordData.word}</div>
                                          <div className="leading-snug font-medium text-slate-200">{wordData.definition}</div>
                                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900" />
                                        </div>
                                      </span>
                                    );
                                  }
                                  return <span key={p_i} className="whitespace-pre">{part}</span>;
                                })}
                                <span>"</span>
                              </div>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-7 w-7 rounded-full text-slate-300 hover:text-blue-500 hover:bg-white shrink-0 opacity-0 group-hover/ex:opacity-100 transition-opacity"
                              onClick={() => speak(ex)}
                              title="Listen example"
                            >
                              <Volume2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.activities && section.activities.length > 0 && (
                    <div className="space-y-4 pt-4 border-t border-slate-50">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-blue-500" />
                        Quick Practice
                      </h4>
                      <div className="space-y-6">
                        {section.activities.map((activity) => (
                          <LessonActivityComponent key={activity.id} activity={activity} />
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="border-2 border-blue-100 bg-blue-50/30 sticky top-24 shadow-lg shadow-blue-900/5">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Ready to Test?
              </CardTitle>
              <CardDescription>
                Test your knowledge of {lesson.level} grammar and vocabulary with a 20-question quiz.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  Personalized Feedback
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  Detailed Explanations
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  Progress Tracking
                </div>
              </div>
              <Button onClick={onStartTest} className="w-full bg-slate-900 hover:bg-blue-600 h-12 rounded-xl shadow-lg shadow-black/10">
                Start Proficiency Test
              </Button>
            </CardContent>
          </Card>

          <div className="p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center space-y-3">
             <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
             <p className="text-sm font-medium text-slate-400">
                More lessons coming soon for {lesson.level} level.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
