/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { EnglishLevel, Subject } from "../types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Zap, Trophy, Shield, Star, Book, Sparkles, CheckCircle2, ArrowRight, Heart, Home, Briefcase, User, Landmark, Activity, Plane, Dog, Soup, CloudRain, Cpu, ShoppingCart, Globe, Leaf, Newspaper, Clock, Smile, Package, School, Dumbbell, Compass, Sun, Users, Building2, Coins, Scale, Binary, Rocket, Languages, Network, Atom, Brain, BarChart, History, Gavel, Palette, Microscope, Shirt, Layers } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface LevelSelectorProps {
  subject: Subject;
  onSelect: (level: EnglishLevel, mode: 'lesson' | 'test' | 'overall', topic?: string) => void;
}

const thematicTopics = [
  // A1
  { id: 'Family', icon: Heart, color: 'text-rose-500 bg-rose-50 border-rose-100', level: 'A1' as EnglishLevel },
  { id: 'Animals', icon: Dog, color: 'text-amber-500 bg-amber-50 border-amber-100', level: 'A1' as EnglishLevel },
  { id: 'Food', icon: Soup, color: 'text-emerald-500 bg-emerald-50 border-emerald-100', level: 'A1' as EnglishLevel },
  { id: 'Colors & Numbers', icon: Palette, color: 'text-pink-500 bg-pink-50 border-pink-100', level: 'A1' as EnglishLevel },
  { id: 'Clothes', icon: Shirt, color: 'text-blue-400 bg-blue-50 border-blue-100', level: 'A1' as EnglishLevel },
  { id: 'Feelings', icon: Smile, color: 'text-yellow-500 bg-yellow-50 border-yellow-100', level: 'A1' as EnglishLevel },
  { id: 'Objects', icon: Package, color: 'text-slate-500 bg-slate-50 border-slate-100', level: 'A1' as EnglishLevel },
  { id: 'Body', icon: User, color: 'text-orange-500 bg-orange-50 border-orange-100', level: 'A1' as EnglishLevel },
  { id: 'School', icon: School, color: 'text-blue-500 bg-blue-50 border-blue-100', level: 'A1' as EnglishLevel },
  { id: 'Time', icon: Clock, color: 'text-indigo-500 bg-indigo-50 border-indigo-100', level: 'A1' as EnglishLevel },
  { id: 'Actions', icon: Activity, color: 'text-green-500 bg-green-50 border-green-100', level: 'A1' as EnglishLevel },
  // A2
  { id: 'Transport', icon: Plane, color: 'text-sky-500 bg-sky-50 border-sky-100', level: 'A2' as EnglishLevel },
  { id: 'Weather', icon: CloudRain, color: 'text-blue-500 bg-blue-50 border-blue-100', level: 'A2' as EnglishLevel },
  { id: 'House', icon: Home, color: 'text-indigo-500 bg-indigo-50 border-indigo-100', level: 'A2' as EnglishLevel },
  { id: 'Jobs', icon: Briefcase, color: 'text-slate-500 bg-slate-50 border-slate-100', level: 'A2' as EnglishLevel },
  { id: 'Hobbies', icon: Sparkles, color: 'text-rose-500 bg-rose-50 border-rose-100', level: 'A2' as EnglishLevel },
  { id: 'Town', icon: Compass, color: 'text-emerald-500 bg-emerald-50 border-emerald-100', level: 'A2' as EnglishLevel },
  { id: 'Nature', icon: Leaf, color: 'text-green-500 bg-green-50 border-green-100', level: 'A2' as EnglishLevel },
  { id: 'Health', icon: Activity, color: 'text-red-500 bg-red-50 border-red-100', level: 'A2' as EnglishLevel },
  { id: 'Daily Life', icon: Sun, color: 'text-amber-500 bg-amber-50 border-amber-100', level: 'A2' as EnglishLevel },
  { id: 'Housing', icon: Building2, color: 'text-slate-600 bg-slate-50 border-slate-100', level: 'A2' as EnglishLevel },
  // B1
  { id: 'Media', icon: Newspaper, color: 'text-blue-500 bg-blue-50 border-blue-100', level: 'B1' as EnglishLevel },
  { id: 'Environment', icon: Leaf, color: 'text-emerald-600 bg-emerald-50 border-emerald-100', level: 'B1' as EnglishLevel },
  { id: 'Work', icon: Briefcase, color: 'text-indigo-600 bg-indigo-50 border-indigo-100', level: 'B1' as EnglishLevel },
  { id: 'Technology', icon: Cpu, color: 'text-purple-500 bg-purple-50 border-purple-100', level: 'B1' as EnglishLevel },
  { id: 'Personality', icon: Users, color: 'text-rose-500 bg-rose-50 border-rose-100', level: 'B1' as EnglishLevel },
  { id: 'Office', icon: Building2, color: 'text-slate-700 bg-slate-50 border-slate-100', level: 'B1' as EnglishLevel },
  { id: 'Travel', icon: Globe, color: 'text-cyan-500 bg-cyan-50 border-cyan-100', level: 'B1' as EnglishLevel },
  { id: 'Shopping', icon: ShoppingCart, color: 'text-pink-500 bg-pink-50 border-pink-100', level: 'B1' as EnglishLevel },
  { id: 'Health', icon: Activity, color: 'text-red-600 bg-red-50 border-red-100', level: 'B1' as EnglishLevel },
  // B2
  { id: 'Environment', icon: Globe, color: 'text-green-600 bg-green-50 border-green-100', level: 'B2' as EnglishLevel },
  { id: 'Education', icon: GraduationCap, color: 'text-violet-500 bg-violet-50 border-violet-100', level: 'B2' as EnglishLevel },
  { id: 'Bank', icon: Landmark, color: 'text-blue-600 bg-blue-50 border-blue-100', level: 'B2' as EnglishLevel },
  { id: 'Media', icon: Newspaper, color: 'text-yellow-600 bg-yellow-50 border-yellow-100', level: 'B2' as EnglishLevel },
  { id: 'Politics', icon: Shield, color: 'text-slate-800 bg-slate-100 border-slate-200', level: 'B2' as EnglishLevel },
  { id: 'Science', icon: Microscope, color: 'text-cyan-600 bg-cyan-50 border-cyan-100', level: 'B2' as EnglishLevel },
  { id: 'History', icon: History, color: 'text-amber-700 bg-amber-50 border-amber-100', level: 'B2' as EnglishLevel },
  { id: 'Technology', icon: Binary, color: 'text-purple-600 bg-purple-50 border-purple-100', level: 'B2' as EnglishLevel },
  { id: 'Society', icon: Scale, color: 'text-blue-500 bg-blue-50 border-blue-100', level: 'B2' as EnglishLevel },
  // C1
  { id: 'Work', icon: Briefcase, color: 'text-slate-700 bg-slate-100 border-slate-200', level: 'C1' as EnglishLevel },
  { id: 'Sport', icon: Trophy, color: 'text-orange-600 bg-orange-50 border-orange-100', level: 'C1' as EnglishLevel },
  { id: 'Psychology', icon: Brain, color: 'text-pink-600 bg-pink-50 border-pink-100', level: 'C1' as EnglishLevel },
  { id: 'Linguistics', icon: Languages, color: 'text-blue-600 bg-blue-50 border-blue-100', level: 'C1' as EnglishLevel },
  { id: 'Sociology', icon: Network, color: 'text-purple-600 bg-purple-50 border-purple-100', level: 'C1' as EnglishLevel },
  { id: 'Ethics', icon: Scale, color: 'text-emerald-700 bg-emerald-50 border-emerald-100', level: 'C1' as EnglishLevel },
  { id: 'Finance', icon: Coins, color: 'text-amber-600 bg-amber-50 border-amber-100', level: 'C1' as EnglishLevel },
  { id: 'Art', icon: Palette, color: 'text-rose-600 bg-rose-50 border-rose-100', level: 'C1' as EnglishLevel },
  { id: 'Technology', icon: Cpu, color: 'text-cyan-700 bg-cyan-50 border-cyan-100', level: 'C1' as EnglishLevel },
  // C2
  { id: 'Philosophy', icon: Sparkles, color: 'text-indigo-700 bg-indigo-50 border-indigo-100', level: 'C2' as EnglishLevel },
  { id: 'Physics', icon: Atom, color: 'text-sky-600 bg-sky-50 border-sky-100', level: 'C2' as EnglishLevel },
  { id: 'Politics', icon: Landmark, color: 'text-slate-800 bg-slate-100 border-slate-200', level: 'C2' as EnglishLevel },
  { id: 'Science', icon: Brain, color: 'text-rose-700 bg-rose-50 border-rose-100', level: 'C2' as EnglishLevel },
  { id: 'Economics', icon: BarChart, color: 'text-emerald-600 bg-emerald-50 border-emerald-100', level: 'C2' as EnglishLevel },
];

const levels: { id: EnglishLevel; title: string; subtitle: string; description: string; icon: any; color: string }[] = [
  {
    id: 'A1',
    title: 'A1',
    subtitle: 'Beginner',
    description: 'Basic vocabulary, simple sentences, and everyday communication.',
    icon: Zap,
    color: 'text-green-500 bg-green-50',
  },
  {
    id: 'A2',
    title: 'A2',
    subtitle: 'Elementary',
    description: 'Frequent expressions and routine tasks in simple terms.',
    icon: Star,
    color: 'text-emerald-500 bg-emerald-50',
  },
  {
    id: 'B1',
    title: 'B1',
    subtitle: 'Intermediate',
    description: 'Clear input on familiar matters and main points of texts.',
    icon: GraduationCap,
    color: 'text-blue-500 bg-blue-50',
  },
  {
    id: 'B2',
    title: 'B2',
    subtitle: 'Upper Intermediate',
    description: 'Complex text, technical discussions, and fluency.',
    icon: Shield,
    color: 'text-indigo-500 bg-indigo-50',
  },
  {
    id: 'C1',
    title: 'C1',
    subtitle: 'Advanced',
    description: 'Demanding texts, subtle meanings, and flexible use of language.',
    icon: Trophy,
    color: 'text-purple-500 bg-purple-50',
  },
  {
    id: 'C2',
    title: 'C2',
    subtitle: 'Proficiency',
    description: 'Ease in complex situations and mastery of finer nuances.',
    icon: Sparkles,
    color: 'text-rose-500 bg-rose-50',
  },
];

export function LevelSelector({ subject, onSelect }: LevelSelectorProps) {
  const isGrammar = subject === 'grammar';

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
          {isGrammar ? 'Grammar' : 'Vocab'}<span className="text-blue-600">Master</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          {isGrammar 
            ? "Master English grammar from foundational basics to complex structures with our CEFR-aligned learning paths."
            : "Expand your vocabulary across all proficiency levels. Learn essential words and phrases for daily and professional use."}
        </p>
      </div>

      {/* Global Placement Test Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-xl shadow-blue-900/5 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3">
              <div className="p-8 md:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  <Trophy className="w-3.5 h-3.5" />
                  Recommended
                </div>
                <h2 className="text-3xl font-black text-slate-900">Global {isGrammar ? 'Grammar' : 'Vocab'} Test</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Take our comprehensive 20-question {isGrammar ? 'grammar' : 'vocabulary'} diagnostic test covering A1 to C2 levels to evaluate your current proficiency.
                </p>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    All CEFR Levels
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    Topic Coverage
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 p-8 flex flex-col justify-center items-center text-center space-y-6">
                <div className="space-y-1">
                  <span className="text-blue-400 text-xs font-mono font-bold uppercase">Test Duration</span>
                  <p className="text-white text-2xl font-bold">20-25 Minutes</p>
                </div>
                <Button 
                  onClick={() => onSelect('A1', 'overall')}
                  className="w-full py-7 bg-blue-600 hover:bg-blue-500 text-lg font-black rounded-2xl shadow-lg shadow-blue-500/20 group"
                >
                  Start Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Core Grammar Categories */}
      {isGrammar && (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Core Grammar</span>
            <Separator className="flex-1" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -5 }}
              onClick={() => onSelect('General', 'lesson', 'Parts of Speech')}
              className="cursor-pointer"
            >
              <Card className="border-2 hover:border-blue-500 transition-all shadow-sm bg-white group overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Book className="w-16 h-16" />
                </div>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">Parts of Speech</CardTitle>
                    <CardDescription>Nouns, Verbs, Adjectives, and more.</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -5 }}
              onClick={() => onSelect('General', 'lesson', 'Tenses')}
              className="cursor-pointer"
            >
              <Card className="border-2 hover:border-blue-500 transition-all shadow-sm bg-white group overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Clock className="w-16 h-16" />
                </div>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <History className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">Tenses</CardTitle>
                    <CardDescription>Present, Past, and Future foundations.</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 pt-4">
        <Separator className="flex-1" />
        <span className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">CEFR Levels</span>
        <Separator className="flex-1" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {levels.map((level, idx) => {
          const levelTopics = thematicTopics.filter(t => t.level === level.id);
          return (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-2 hover:border-blue-500 transition-all shadow-sm group bg-white">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${level.color} transition-transform group-hover:scale-110 duration-300`}>
                      <level.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-black text-slate-300 group-hover:text-blue-200 transition-colors">CEFR {level.title}</span>
                  </div>
                  <button 
                    onClick={() => onSelect(level.id, 'lesson')}
                    className="text-left hover:opacity-70 transition-opacity"
                  >
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-2xl font-bold">{level.id}</CardTitle>
                      <span className="text-slate-400 font-medium">—</span>
                      <span className="text-lg font-semibold text-slate-600">{level.subtitle}</span>
                    </div>
                    <CardDescription className="leading-relaxed mt-2 text-slate-500 h-12 line-clamp-2">
                      {level.description}
                    </CardDescription>
                  </button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isGrammar ? (
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        onClick={() => onSelect(level.id, 'lesson')}
                        variant="outline"
                        className="w-full rounded-xl border-slate-200 hover:bg-slate-50 hover:text-blue-600 group/btn"
                      >
                        < Book className="w-4 h-4 mr-2 text-slate-400 group-hover/btn:text-blue-600" />
                        Lessons
                      </Button>
                      <Button 
                        onClick={() => onSelect(level.id, 'test')}
                        className="w-full rounded-xl bg-slate-900 hover:bg-blue-600 transition-colors whitespace-nowrap"
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Assessment
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <Button 
                          onClick={() => onSelect(level.id, 'lesson')}
                          variant="outline"
                          className="w-full rounded-xl border-slate-200 hover:bg-slate-50 hover:text-blue-600 group/btn"
                        >
                          <Book className="w-4 h-4 mr-2 text-slate-400 group-hover/btn:text-blue-600" />
                          Lessons
                        </Button>
                        <Button 
                          onClick={() => onSelect(level.id, 'test')}
                          className="w-full rounded-xl bg-slate-900 hover:bg-blue-600 transition-colors whitespace-nowrap"
                        >
                          <Zap className="w-4 h-4 mr-2" />
                          Assessment
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Thematic Topics</h4>
                        <div className="flex flex-wrap gap-2">
                          {levelTopics.length > 0 ? (
                            levelTopics.map(topic => (
                              <button
                                key={topic.id}
                                onClick={() => onSelect(level.id, 'lesson', topic.id)}
                                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold border transition-all flex items-center gap-1.5 ${topic.color} hover:shadow-sm hover:border-blue-300`}
                              >
                                <topic.icon className="w-3.5 h-3.5" />
                                {topic.id}
                              </button>
                            ))
                          ) : (
                            <span className="text-xs text-slate-400 italic">Core categories...</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>



      <div className="mt-12 text-center p-8 rounded-3xl bg-blue-50 border border-blue-100 shadow-inner">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-xs font-bold text-blue-600 mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          AI POWERED SYSTEM
        </div>
        <p className="text-base font-semibold text-blue-900 flex items-center justify-center gap-2">
          Experience real-time feedback and detailed linguistic analysis powered by Gemini 3 Flash.
        </p>
      </div>
    </div>
  );
}
