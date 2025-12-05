// src/services/geminiService.ts
// (exact path tumhare project ka ho sakta hai, usi file ko replace karna hai)

export interface CaptionResult {
  caption: string;
  hashtags: string[];
}

// Temporary / dummy implementation – NO API, NO KEY
export const generateNostalgicCaption = async (
  context: string
): Promise<CaptionResult> => {
  console.log("Gemini disabled (dummy caption used). Context:", context);

  return {
    caption:
      "we turned this old tape into a tiny time machine and hit play on your childhood. 🎞️✨",
    hashtags: [
      "#lostfamilytapes",
      "#nostalgia",
      "#familyarchives",
      "#vhs",
      "#foundfootage",
    ],
  };
};
