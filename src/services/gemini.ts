/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";
import { Question } from "../types";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || '' 
});

export async function getDetailedExplanation(question: Question, userAnswer: string[]) {
  const prompt = `
    The user is taking an English level test.
    Question: ${question.text}
    Context: ${question.context || 'N/A'}
    Options: ${question.options?.join(', ') || 'N/A'}
    Correct Answer: ${question.correctAnswer.join(', ')}
    User's Answer: ${userAnswer.join(', ')}

    Please provide a brief, encouraging explanation (2-3 sentences) on why the correct answer is right and why the user's answer might be common mistake (if it is wrong). 
    Keep the tone educational and friendly.
    If the user's answer is correct, congratulate them and briefly reinforce the rule.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text || "Could not generate explanation.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error getting AI feedback. Please rely on the standard explanation.";
  }
}

export async function getFinalAssessment(score: number, total: number, level: string) {
  const prompt = `
    User finished an English test for ${level} level.
    Score: ${score}/${total}
    
    Provide a personalized short assessment (3-4 sentences) summarizing their strengths and areas for improvement based on this result.
    Suggest 2-3 specific topics they should study next.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text || "Could not generate assessment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Great job completing the test! Keep practicing to improve your skills.";
  }
}

export async function generateExampleSentence(word: string, definition: string, level: string) {
  const prompt = `
    Generate a simple, clear, and natural English example sentence for the word: "${word}".
    The student's level is ${level}.
    The definition of the word is: "${definition}".
    
    The sentence should be relevant to an English learner.
    Return ONLY the sentence, nothing else.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text?.trim() || "Could not generate example.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return `I am ${word === 'happy' ? 'happy' : '...'} to help, but I had trouble thinking of a sentence right now!`;
  }
}
