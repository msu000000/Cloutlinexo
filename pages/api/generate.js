import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" });
  }

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Create a viral short-form content hook for: ${prompt}`,
      max_tokens: 50,
    });

    res.status(200).json({ hook: response.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate hook" });
  }
}