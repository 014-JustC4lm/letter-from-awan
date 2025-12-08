/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function Slide({ image, video, header, text, buttonText, onNext, isLast, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center min-h-screen w-full px-4 sm:px-8 py-6 relative z-[10]"
    >

      {/* 🔹 VIDEO / IMAGE Responsive */}
      {video ? (
        <motion.video
          src={video}
          autoPlay
          loop
          // muted
          playsInline
          className="w-[65%] max-w-[260px] sm:max-w-[320px] rounded-xl shadow-lg mb-6 relative z-[5]"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.3 }}
        />
      ) : image && (
        <motion.img
          src={image}
          alt="slide"
          className="w-[65%] max-w-[240px] sm:max-w-[300px] rounded-xl shadow-lg mb-6 relative z-[5]"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.3 }}
        />
      )}


      {/* 🔹 HEADER Responsive size */}
      <h1 className="text-[clamp(22px,5vw,36px)] font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,255,255,0.35)] mb-3">
        {header}
      </h1>

      {/* 🔹 CONTENT */}
      {children ? (
        <div className="max-w-[90%] sm:max-w-lg text-[clamp(14px,3vw,18px)] text-gray-200 drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] leading-relaxed">
          {children}
        </div>
      ) : (
        <p className="max-w-[90%] sm:max-w-lg text-[clamp(14px,3vw,18px)] text-gray-200 drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] leading-relaxed mb-6">
          {text}
        </p>
      )}

      {/* 🔹 BUTTON — Full width in mobile, normal on desktop */}
      {!isLast && (
        <button
          onClick={onNext}
          className="bg-white/20 border border-white/30 text-white font-medium px-6 py-3 rounded-xl backdrop-blur-md transition-all hover:bg-white/30 shadow-md hover:scale-[1.05] w-full sm:w-auto"
        >
          {buttonText || "Next"}
        </button>
      )}
    </motion.div>
  );
}
