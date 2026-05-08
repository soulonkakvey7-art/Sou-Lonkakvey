import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { Lesson } from "../types";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  lessons: Lesson[];
  onSelectLesson: (lesson: Lesson) => void;
}

export function SearchOverlay({ isOpen, onClose, lessons, onSelectLesson }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery("");
    }
  }, [isOpen]);

  const filteredLessons = query.trim() === "" 
    ? [] 
    : lessons.filter(l => 
        l.title.toLowerCase().includes(query.toLowerCase()) || 
        l.description.toLowerCase().includes(query.toLowerCase()) ||
        l.topic?.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-[101]"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="p-4 border-b flex items-center gap-3">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for lessons, grammar, or vocabulary..."
                  className="flex-1 bg-transparent border-none outline-none text-lg font-medium placeholder:text-slate-400"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {query.trim() === "" ? (
                  <div className="py-12 text-center space-y-2">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <p className="font-bold text-slate-900">What do you want to learn today?</p>
                    <p className="text-sm text-slate-500">Try searching for "Past Simple" or "Animals"</p>
                  </div>
                ) : filteredLessons.length > 0 ? (
                  <div className="grid gap-1">
                    {filteredLessons.map((lesson, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onSelectLesson(lesson);
                          onClose();
                        }}
                        className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all text-left group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs font-black px-1.5 py-0.5 rounded bg-slate-900 text-white uppercase tracking-wider">
                              {lesson.level}
                            </span>
                            <h4 className="font-bold text-slate-900 truncate">{lesson.title}</h4>
                          </div>
                          <p className="text-xs text-slate-500 truncate">{lesson.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-slate-400">
                    <p className="font-medium">No results found for "{query}"</p>
                  </div>
                )}
              </div>
              
              <div className="p-4 bg-slate-50 border-t flex items-center justify-between">
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 rounded border border-slate-300 bg-white shadow-sm font-sans text-[10px]">ESC</kbd>
                    to close
                  </span>
                </div>
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  Live Results
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
