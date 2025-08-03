import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      router.push(`/results?prompt=${encodeURIComponent(prompt)}`);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="container py-10">
        <h1 className="text-4xl font-bold text-center mb-6">
          AI Viral Hook Generator
        </h1>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            className="flex-grow p-3 rounded bg-gray-800 border border-gray-700"
            placeholder="Enter your topic..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded text-white"
          >
            Generate
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}