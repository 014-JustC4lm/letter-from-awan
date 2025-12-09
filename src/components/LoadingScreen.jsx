import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }) {
  const [dots, setDots] = useState("");
  const [showButton, setShowButton] = useState(false);

  // animate dots pattern `. .. ... .. .` looping
  useEffect(() => {
    const pattern = ["", ".", "..", "...", "..", "."];
    let i = 0;

    const interval = setInterval(() => {
      setDots(pattern[i]);
      i = (i + 1) % pattern.length;
    }, 350);

    return () => clearInterval(interval);
  }, []);

  // show start button after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0f1223] flex flex-col items-center justify-center z-[9999]">

      {/* pulsing icon */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.7 }}
        className="text-pink-400 text-[55px] sm:text-[80px]"
      >
        ✉
      </motion.div>

      {/* animated text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 text-gray-200 text-[clamp(14px,4vw,22px)] tracking-wide text-center"
      >
        Preparing something special for you{dots}
      </motion.div>

      {/* START button (appears after delay) */}
      {showButton && (
        <motion.button
          onClick={onFinish}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-16 px-7 py-3 bg-white/15 border border-white/30 
          text-white font-semibold rounded-xl backdrop-blur-md shadow-lg
          hover:bg-white/25 hover:scale-[1.05] transition-all 
          text-[clamp(16px,4vw,20px)]"
        >
          ⭐ Start ⭐
        </motion.button>
      )}
    </div>
  );
}
