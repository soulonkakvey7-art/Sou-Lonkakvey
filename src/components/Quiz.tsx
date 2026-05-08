/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Question, EnglishLevel } from "../types";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { CheckCircle2, XCircle, Info, Sparkles, ArrowRight, RotateCcw, Trophy, Target, Star } from "lucide-react";
import { getDetailedExplanation, getFinalAssessment } from "../services/gemini";

interface QuizProps {
  level: EnglishLevel | 'Overall';
  questions: Question[];
  onFinish: () => void;
}

export function Quiz({ level, questions, onFinish }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [isShowingFeedback, setIsShowingFeedback] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [finalAssessment, setFinalAssessment] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleNext = async () => {
    if (!isShowingFeedback) {
      setIsShowingFeedback(true);
      setIsLoadingAI(true);
      
      const isCorrect = JSON.stringify(selectedAnswer) === JSON.stringify(currentQuestion.correctAnswer);
      if (isCorrect) setScore(s => s + 1);

      const explanation = await getDetailedExplanation(currentQuestion, selectedAnswer);
      setAiExplanation(explanation);
      setIsLoadingAI(false);
    } else {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer([]);
        setIsShowingFeedback(false);
        setAiExplanation(null);
      } else {
        setIsQuizComplete(true);
        setIsLoadingAI(true);
        const assessment = await getFinalAssessment(score, questions.length, level);
        setFinalAssessment(assessment);
        setIsLoadingAI(false);
      }
    }
  };

  if (isQuizComplete) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <Card className="border-2 shadow-xl overflow-hidden bg-white">
          <div className="h-2 bg-blue-600 w-full" />
          <CardHeader className="text-center pt-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
               <TrophyIcon className="w-full h-full text-amber-500" />
               <div className="absolute -top-1 -right-1 bg-blue-600 text-white p-1.5 rounded-full shadow-lg">
                  <Star className="w-4 h-4 fill-white" />
               </div>
            </div>
            <CardTitle className="text-4xl font-black text-slate-900">
              {level === 'Overall' ? 'Global Assessment' : `${level} Level Result`}
            </CardTitle>
            <p className="text-slate-500 font-medium">Calculation complete. Here is your proficiency report.</p>
          </CardHeader>
          <CardContent className="space-y-8 px-10 pb-10">
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Correct Answers</p>
                  <p className="text-4xl font-black text-slate-900">{score}/{questions.length}</p>
               </div>
               <div className="p-6 rounded-2xl bg-blue-600 text-center text-white shadow-lg shadow-blue-200">
                  <p className="text-xs font-black text-blue-200 uppercase tracking-widest mb-1">Success Rate</p>
                  <p className="text-4xl font-black">{Math.round((score/questions.length)*100)}%</p>
               </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden group">
              <Sparkles className="absolute -top-4 -right-4 w-24 h-24 text-white/5 rotate-12" />
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                AI Linguistic Profile
              </h3>
              {isLoadingAI ? (
                <div className="flex items-center gap-3 text-blue-400 font-medium animate-pulse">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-400 border-t-transparent" />
                  Analyzing performance data...
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed font-medium">
                    {finalAssessment}
                  </p>
                  <div className="flex gap-2">
                    <Badge className="bg-blue-500/20 text-blue-300 border-none">Vocabulary</Badge>
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-none">Grammar</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-none">Syntax</Badge>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={() => window.location.reload()} variant="outline" className="flex-1 h-14 rounded-2xl border-2 text-lg font-bold">
                <RotateCcw className="w-5 h-5 mr-2" />
                Main Lobby
              </Button>
              <Button onClick={onFinish} className="flex-1 h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 text-lg font-bold text-white shadow-lg shadow-blue-200 transition-all active:scale-95">
                Practice More
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const isCorrect = JSON.stringify(selectedAnswer) === JSON.stringify(currentQuestion.correctAnswer);

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-20">
      <div className="flex items-center justify-between px-2">
        <Badge variant="outline" className="px-4 py-1.5 bg-white shadow-sm border-2 text-slate-700 font-black tracking-wider">
          {level === 'Overall' ? 'PLACEMENT TEST' : `LEVEL ${level}`}
        </Badge>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress</span>
          <span className="text-sm font-black text-slate-800 font-mono">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      <Progress value={progress} className="h-3 rounded-full overflow-hidden bg-slate-100 border p-0.5" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-2 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-2xl leading-tight font-semibold text-slate-800">
                  {currentQuestion.text}
                </CardTitle>
              </div>
              {currentQuestion.context && (
                <p className="text-sm text-slate-500 font-medium mt-2 flex items-center gap-1.5">
                  <Info className="w-4 h-4" />
                  {currentQuestion.context}
                </p>
              )}
            </CardHeader>
            <CardContent className="space-y-6 pt-2">
              {currentQuestion.type === 'MCQ' && (
                <RadioGroup 
                  disabled={isShowingFeedback}
                  value={selectedAnswer[0] || ""} 
                  onValueChange={(v) => setSelectedAnswer([v])}
                  className="grid gap-3"
                >
                  {currentQuestion.options?.map((option) => (
                    <Label
                      key={option}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedAnswer[0] === option 
                          ? 'border-blue-500 bg-blue-50/50' 
                          : 'border-slate-100 hover:border-blue-200 bg-white'
                      } ${
                        isShowingFeedback && option === currentQuestion.correctAnswer[0] ? 'border-green-500 bg-green-50 ring-1 ring-green-500' : ''
                      } ${
                        isShowingFeedback && selectedAnswer[0] === option && option !== currentQuestion.correctAnswer[0] ? 'border-red-500 bg-red-50 ring-1 ring-red-500' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value={option} className="sr-only" />
                        <span className="font-medium text-slate-700">{option}</span>
                      </div>
                      {isShowingFeedback && option === currentQuestion.correctAnswer[0] && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                      {isShowingFeedback && selectedAnswer[0] === option && option !== currentQuestion.correctAnswer[0] && <XCircle className="w-5 h-5 text-red-600" />}
                    </Label>
                  ))}
                </RadioGroup>
              )}

              {currentQuestion.type === 'FILL_IN_BLANK' && (
                <div className="space-y-4">
                  <Input 
                    disabled={isShowingFeedback}
                    placeholder="Type your answer here..."
                    className={`h-14 text-lg font-medium px-4 rounded-xl border-2 transition-all ${
                      isShowingFeedback && isCorrect ? 'border-green-500 bg-green-50 shadow-[0_0_0_1px_rgba(34,197,94,1)]' : 
                      isShowingFeedback && !isCorrect ? 'border-red-500 bg-red-50 shadow-[0_0_0_1px_rgba(239,68,68,1)]' : 
                      'border-slate-100 focus:border-blue-500 bg-white'
                    }`}
                    value={selectedAnswer[0] || ''}
                    onChange={(e) => setSelectedAnswer([e.target.value.toLowerCase().trim()])}
                  />
                  {isShowingFeedback && !isCorrect && (
                    <p className="text-sm font-bold text-green-700 flex items-center gap-1.5 px-1">
                       Correct Answer: {currentQuestion.correctAnswer[0]}
                    </p>
                  )}
                </div>
              )}

              {currentQuestion.type === 'REORDER' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {currentQuestion.text.match(/\[(.*?)\]/)?.[1].split(',').map(s => s.trim().replace(/"/g, '')).map((word) => (
                      <Badge 
                        key={word} 
                        variant="secondary"
                        className="px-3 py-1.5 cursor-pointer text-sm font-semibold hover:bg-slate-200 transition-colors"
                        onClick={() => {
                          if (isShowingFeedback) return;
                          if (selectedAnswer.includes(word)) {
                            setSelectedAnswer(selectedAnswer.filter(w => w !== word));
                          } else {
                            setSelectedAnswer([...selectedAnswer, word]);
                          }
                        }}
                      >
                        {word}
                      </Badge>
                    ))}
                  </div>
                  <div className={`min-h-14 p-3 rounded-xl border-2 dashed flex flex-wrap gap-2 items-center ${
                    isShowingFeedback && isCorrect ? 'border-green-500 bg-green-50' : 
                    isShowingFeedback && !isCorrect ? 'border-red-500 bg-red-50' : 
                    'border-slate-200 border-dashed bg-slate-50/50'
                  }`}>
                    {selectedAnswer.length === 0 && <span className="text-slate-400 text-sm italic ml-1">Click words above to build sentence...</span>}
                    {selectedAnswer.map((word) => (
                      <Badge key={word} className="px-3 py-1 text-sm bg-slate-900">
                        {word}
                      </Badge>
                    ))}
                  </div>
                  {isShowingFeedback && !isCorrect && (
                    <p className="text-sm font-bold text-green-700 flex items-center gap-1.5 px-1">
                       Correct Answer: {currentQuestion.correctAnswer.join(' ')}
                    </p>
                  )}
                </div>
              )}

              {isShowingFeedback && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-5 rounded-2xl border-2 ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 p-2 rounded-lg ${isCorrect ? 'bg-green-200/50' : 'bg-red-200/50'}`}>
                      <Info className={`w-4 h-4 ${isCorrect ? 'text-green-700' : 'text-red-700'}`} />
                    </div>
                    <div className="space-y-3">
                      <p className={`text-sm leading-relaxed font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                        {currentQuestion.explanation}
                      </p>
                      <div className={`p-4 rounded-xl bg-white/60 backdrop-blur-sm border shadow-sm ${isCorrect ? 'border-green-200' : 'border-red-200'}`}>
                        <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-blue-500 fill-blue-500" />
                          AI Tutor Insights
                        </h4>
                        {isLoadingAI ? (
                          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 italic">
                            <div className="animate-spin rounded-full h-3 w-3 border border-slate-400 border-t-transparent" />
                            Thinking...
                          </div>
                        ) : (
                          <p className="text-xs leading-relaxed font-medium text-slate-600">
                            {aiExplanation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-end">
        <Button 
          onClick={handleNext}
          disabled={selectedAnswer.length === 0}
          className={`h-14 px-8 rounded-xl font-bold transition-all shadow-lg ${
            isShowingFeedback ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-900 hover:bg-black'
          }`}
        >
          {isShowingFeedback ? (
            currentIndex === questions.length - 1 ? 'See Results' : 'Next Question'
          ) : 'Check Answer'}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
