import { GoogleGenAI } from "@google/genai";

// Initialize the client
// NOTE: In a real production app, ensure your API key is restricted or proxied.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface CaptionResult {
  caption: string;
  hashtags: string[];
}

export const generateNostalgicCaption = async (context: string): Promise<CaptionResult> => {
  try {
    const prompt = `
      You are a social media expert specializing in "Nostalgia Core" and vintage aesthetics.
      
      Task: Write a short, viral, nostalgic Instagram caption for a home video described as: "${context}".
      
      Style guidelines:
      - Use Gen Z humor mixed with deep sentimentality.
      - Keep it under 2 sentences.
      - Lowercase is acceptable if it fits the vibe.
      - Do not include emojis in the main text, only at the end.
      
      Output Format: JSON with keys "caption" (string) and "hashtags" (array of strings).
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) throw new Error("No content generated");

    return JSON.parse(text) as CaptionResult;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
