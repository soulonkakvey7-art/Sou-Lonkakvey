/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Lesson, EnglishLevel } from "../types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, BookOpen, ChevronRight, GraduationCap } from "lucide-react";
import { Separator } from "./ui/separator";

interface LessonListProps {
  level: EnglishLevel;
  lessons: Lesson[];
  onSelectLesson: (lesson: Lesson) => void;
  onBack: () => void;
}

export function LessonList({ level, lessons, onSelectLesson, onBack }: LessonListProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack} className="rounded-full hover:bg-slate-100">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Levels
        </Button>
        <Separator orientation="vertical" className="h-6" />
        <Badge className="bg-blue-600 px-3 py-1">CEFR {level} Syllabus</Badge>
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          {level} Learning Path
        </h1>
        <p className="text-lg text-slate-600">
          Explore the core grammar and vocabulary modules designed for {level} proficiency.
        </p>
      </div>

      <div className="grid gap-4">
        {lessons.length > 0 ? (
          lessons.map((lesson, idx) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card 
                className="group cursor-pointer hover:border-blue-500 hover:shadow-md transition-all bg-white"
                onClick={() => onSelectLesson(lesson)}
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        {lesson.title}
                        {lesson.topic && <Badge variant="outline" className="text-[10px] uppercase tracking-tighter h-5">{lesson.topic}</Badge>}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium">
                        {lesson.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Module {idx + 1}
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
             <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-4" />
             <h3 className="text-xl font-bold text-slate-600">No lessons available yet</h3>
             <p className="text-slate-400 max-w-xs mx-auto">
                We are currently crafting high-quality content for this level. Check back soon!
             </p>
          </div>
        )}
      </div>
    </div>
  );
}
