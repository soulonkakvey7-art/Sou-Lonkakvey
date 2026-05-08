/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { LessonActivity } from '../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { CheckCircle2, XCircle, HelpCircle, RefreshCcw } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { cn } from '../lib/utils';

interface LessonActivityProps {
  activity: LessonActivity;
}

export const LessonActivityComponent: React.FC<LessonActivityProps> = ({ activity }) => {
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    const correct = activity.correctAnswer.some(
      ans => ans.toLowerCase().trim() === userAnswer.toLowerCase().trim()
    );
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleReset = () => {
    setUserAnswer('');
    setShowFeedback(false);
  };

  const renderActivity = () => {
    switch (activity.type) {
      case 'fill-in-blank':
        return (
          <div className="space-y-4">
            <div className="text-lg font-medium text-slate-800 leading-relaxed">
              {activity.question.split('___').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="inline-block min-w-[100px] border-b-2 border-slate-300 mx-2">
                      {showFeedback ? (
                        <span className={cn("font-bold", isCorrect ? "text-green-600" : "text-red-500")}>
                          {userAnswer || '___'}
                        </span>
                      ) : (
                        <Input
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          className="h-8 border-none focus-visible:ring-0 text-center bg-transparent"
                          placeholder="..."
                        />
                      )}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        );

      case 'comprehension':
        return (
          <div className="space-y-4">
            <p className="text-lg font-medium text-slate-800">{activity.question}</p>
            <RadioGroup
              value={userAnswer || ""}
              onValueChange={setUserAnswer}
              disabled={showFeedback}
              className="space-y-2"
            >
              {activity.options?.map((option, idx) => (
                <div key={idx} className={cn(
                  "flex items-center space-x-2 p-3 rounded-xl border transition-all",
                  showFeedback && option === activity.correctAnswer[0] ? "bg-green-50 border-green-200" : 
                  showFeedback && option === userAnswer ? "bg-red-50 border-red-200" : 
                  "bg-white border-slate-200 hover:border-blue-300"
                )}>
                  <RadioGroupItem value={option} id={`opt-${activity.id}-${idx}`} />
                  <Label 
                    htmlFor={`opt-${activity.id}-${idx}`}
                    className="flex-grow cursor-pointer text-slate-700"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 'matching':
        // Simplified matching for now: select the correct definition for the word
        return (
          <div className="space-y-4">
            <p className="text-lg font-medium text-slate-800">
              Match the word <span className="text-blue-600 font-bold">"{activity.question}"</span> with its correct definition:
            </p>
            <div className="grid gap-2">
              {activity.options?.map((option, idx) => (
                <button
                  key={idx}
                  disabled={showFeedback}
                  onClick={() => setUserAnswer(option)}
                  className={cn(
                    "text-left p-3 rounded-xl border transition-all text-sm leading-relaxed",
                    userAnswer === option && !showFeedback ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100" :
                    showFeedback && option === activity.correctAnswer[0] ? "bg-green-50 border-green-200 ring-2 ring-green-100" :
                    showFeedback && option === userAnswer ? "bg-red-50 border-red-200 ring-2 ring-red-100" :
                    "bg-white border-slate-200 hover:border-blue-300"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="border-2 border-slate-100 bg-slate-50/30 overflow-hidden shadow-sm">
      <CardContent className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-blue-600" />
            </div>
            <h5 className="font-bold text-slate-700">Practice Activity</h5>
          </div>
          {showFeedback && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={cn(
                "flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold",
                isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              )}
            >
              {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
              {isCorrect ? "Well Done!" : "Try Again"}
            </motion.div>
          )}
        </div>

        {renderActivity()}

        <AnimatePresence>
          {showFeedback && activity.explanation && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800 leading-relaxed"
            >
              <p className="font-bold mb-1">Explanation:</p>
              {activity.explanation}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-3">
          {!showFeedback ? (
            <Button 
              className="flex-grow bg-blue-600 hover:bg-blue-700"
              onClick={handleSubmit}
              disabled={!userAnswer}
            >
              Check Answer
            </Button>
          ) : (
            <>
              {!isCorrect && (
                <Button 
                  variant="outline"
                  className="flex-grow"
                  onClick={handleReset}
                >
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Retry
                </Button>
              )}
              {isCorrect && (
                <Button 
                  className="flex-grow bg-slate-900"
                  onClick={handleReset}
                >
                  Reset Activity
                </Button>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
