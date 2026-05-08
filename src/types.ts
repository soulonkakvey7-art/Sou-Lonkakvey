/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type EnglishLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'General';

export type Subject = 'grammar' | 'vocab';

export type QuestionType = 'MCQ' | 'FILL_IN_BLANK' | 'REORDER';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  context?: string;
  options?: string[];
  correctAnswer: string[];
  explanation: string;
  level: EnglishLevel;
  subject?: Subject;
  topic?: string;
}

export interface WordDefinition {
  word: string;
  definition: string;
  example?: string;
  imageUrl?: string;
}

export interface LessonActivity {
  id: string;
  type: 'fill-in-blank' | 'matching' | 'comprehension';
  question: string;
  options?: string[];
  correctAnswer: string[];
  explanation?: string;
}

export interface LessonContent {
  title: string;
  sections: {
    heading: string;
    content: string;
    examples?: string[];
    wordList?: WordDefinition[];
    activities?: LessonActivity[];
  }[];
}

export interface Lesson {
  id: string;
  level: EnglishLevel;
  subject?: Subject;
  topic?: string;
  tags?: string[];
  title: string;
  description: string;
  grammarDetail?: string;
  content: LessonContent;
}
