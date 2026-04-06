"use client";

import { useState, useEffect } from "react";

export default function HeroTyping() {
  const sentences = [
    "Finance Reimagined",
    "Retail Redefined",
    "Payments Simplified",
    "Commerce Transformed",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setText(sentences[index]);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [index]);

  return <>{text}</>;
}