import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import axios from "axios";

export default function Results() {
  const router = useRouter();
  const { prompt } = router.query;
  const [hook, setHook] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (prompt) {
      axios
        .post("/api/generate", { prompt })
        .then((res) => {
          setHook(res.data.hook);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [prompt]);

  return (
    <div>
      <Navbar />
      <main className="container py-10">
        {loading ? (
          <p>Generating your hook...</p>
        ) : (
          <div className="p-6 bg-gray-800 rounded">
            <h2 className="text-xl font-bold mb-4">Your Viral Hook</h2>
            <p>{hook}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}