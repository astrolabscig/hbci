import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDailyDevotional = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Provide a short, inspiring daily Christian devotional. Include a single Bible verse, a 3-sentence reflection, and a short 1-sentence prayer. Format it as a JSON object with keys: verse, reference, reflection, and prayer.",
      config: {
        responseMimeType: "application/json",
      },
    });

    if (response.text) {
      return JSON.parse(response.text.trim());
    }
    throw new Error("No response from AI");
  } catch (error) {
    console.error("Error fetching devotional:", error);
    // Fallback devotional
    return {
      verse:"The Lord is my shepherd; I shall not want.",
      reference:"Psalm 23:1",
      reflection:"God provides for our every need, guiding us through both green pastures and dark valleys. When we trust in His leadership, we find a peace that surpasses all understanding. Today, rest in the knowledge that you are cared for by the Good Shepherd.",
      prayer:"Lord, help me to follow Your voice today and trust in Your perfect provision."
    };
  }
};
