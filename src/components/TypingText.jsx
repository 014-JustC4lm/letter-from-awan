import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function TypingText({ text, speed = 50 }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="text-gray-200 max-w-md leading-relaxed whitespace-pre-line">
      {display}
      <span className="border-r-2 border-gray-100 animate-pulse ml-1"></span>
    </p>
  );
}
