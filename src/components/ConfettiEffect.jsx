// src/components/ConfettiEffect.jsx
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

/**
 * Safe confetti: only runs on client, reads window size inside useEffect.
 * Props: active (bool)
 */
export default function ConfettiEffect({ active }) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // only run on client
    setMounted(true);
    function update() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!mounted || !active) return null;

  return (
    <Confetti
      width={size.width}
      height={size.height}
      gravity={0.22}
      wind={0.01}
      recycle={false}
      numberOfPieces={300}
    />
  );
}
