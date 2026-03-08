"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "@/config";
import FloatingHearts from "./FloatingHearts";
import TypewriterText from "./TypewriterText";

type Screen = "initial" | "transition" | "main";

export default function RomanticExperience() {
  const [screen, setScreen] = useState<Screen>("initial");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [showSecondVerse, setShowSecondVerse] = useState(false);
  const [photoSrc, setPhotoSrc] = useState(config.photoUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === config.password.toLowerCase()) {
      setError(false);
      setScreen("transition");
      setTimeout(() => setScreen("main"), 3500);
    } else {
      setError(true);
    }
  };

  const handlePhotoError = () => {
    setPhotoSrc(config.defaultPhotoUrl ?? "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80");
  };

  const handleSurpriseClick = () => {
    setShowSurprise(true);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        {/* Pantalla inicial - Perla delicada */}
        {screen === "initial" && (
          <motion.div
            key="initial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-12 paper-texture"
            style={{ background: "linear-gradient(180deg, #faf8f5 0%, #f8f6f0 50%, #f5f3ed 100%)" }}
          >
            <span className="text-2xl mb-6 opacity-60">💕</span>
            <div className="ornament-line w-24 mb-6" />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center max-w-sm"
            >
              <p className="text-xl md:text-2xl font-display text-[#3d4a2d] font-light mb-10 leading-[1.7] tracking-wide">
                {config.messages.welcome}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.input
                  type="text"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Ingresa la clave ✨"
                  className="w-full px-5 py-4 rounded-2xl bg-white/80 border border-[#e0ddd4] text-[#3d4a2d] placeholder-[#8b9a6b]/70 focus:outline-none focus:ring-2 focus:ring-[#8b9a6b]/30 focus:border-[#8b9a6b]/50 transition-all duration-300 text-center tracking-wider shadow-pearl"
                  style={{ fontFamily: "var(--font-libre)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                />

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-[#6b8e23] text-sm italic"
                    >
                      {config.messages.wrongPassword}
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#8b9a6b]/90 text-white font-display tracking-[0.15em] uppercase text-sm hover:bg-[#7a8c5a] transition-all duration-300 shadow-pearl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Entrar
                </motion.button>
              </form>
            </motion.div>
            <div className="ornament-line w-24 mt-8" />
            <span className="text-2xl mt-6 opacity-60">💕</span>
          </motion.div>
        )}

        {/* Transición - Perla suave */}
        {screen === "transition" && (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center px-6"
            style={{ background: "linear-gradient(180deg, #f8f6f0 0%, #f5f3ed 100%)" }}
          >
            <FloatingHearts />
            <motion.p
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[#5c6b4a] text-base md:text-lg font-display italic text-center z-10 tracking-wide"
            >
              {config.messages.loading}
            </motion.p>
            <motion.div className="mt-8 flex gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#8b9a6b]/60"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.25 }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Pantalla principal - Tarjeta señorita */}
        {screen === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pb-20"
            style={{ background: "linear-gradient(180deg, #faf8f5 0%, #f8f6f0 100%)" }}
          >
            {/* Foto con marco perla */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative w-full max-w-2xl mx-auto px-4 pt-6"
            >
              <div className="rounded-3xl overflow-hidden shadow-pearl border border-[#e0ddd4]/60 relative">
                <div className="relative aspect-[4/5] max-h-[55vh]">
                  <img
                    src={photoSrc}
                    alt="Foto especial"
                    className="w-full h-full object-cover object-top"
                    onError={handlePhotoError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f8f6f0]/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <span className="px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm text-white text-sm font-display tracking-widest">
                      Te amo ❤️
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="px-5 md:px-8 max-w-lg mx-auto mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="space-y-6"
              >
                {/* Tarjeta de contenido */}
                <div className="bg-white/90 rounded-3xl p-6 md:p-8 shadow-pearl border border-[#e0ddd4]/50">
                  <div className="text-center">
                    <h1 className="font-display text-2xl md:text-3xl text-[#3d4a2d] font-medium tracking-tight">
                      {config.messages.mainTitle}
                    </h1>
                    <div className="ornament-line w-12 mx-auto my-4" />
                    <p className="text-[#5c6b4a]/95 text-sm md:text-base leading-relaxed">
                      {config.messages.mainSubtitle}
                    </p>
                  </div>

                  <motion.blockquote
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 }}
                    className="mt-6 pl-4 border-l-2 border-[#8b9a6b]/50 py-1 rounded-r-lg bg-[#f8f6f0]/50"
                  >
                    <p className="text-[#3d4a2d]/95 italic text-sm md:text-base font-display leading-relaxed">
                      &ldquo;{config.verses.first.text}&rdquo;
                    </p>
                    <cite className="text-[#6b8e23]/90 text-xs mt-2 block not-italic">
                      — {config.verses.first.reference}
                    </cite>
                  </motion.blockquote>

                  <motion.button
                    onClick={handleSurpriseClick}
                    className="w-full mt-6 py-4 rounded-2xl border-2 border-[#8b9a6b] text-[#6b8e23] font-display text-sm tracking-[0.15em] uppercase hover:bg-[#8b9a6b]/10 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {config.messages.buttonLabel}
                  </motion.button>

                  <AnimatePresence>
                    {showSurprise && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0 }}
                        className="mt-6 pt-6 border-t border-[#e0ddd4]"
                      >
                        <TypewriterText
                          text={config.messages.surpriseText}
                          onComplete={() => setShowSecondVerse(true)}
                          className="text-[#3d4a2d] text-center font-display text-base leading-relaxed"
                        />
                        <AnimatePresence>
                          {showSecondVerse && (
                            <motion.blockquote
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                              className="mt-4 pl-4 border-l-2 border-[#8b9a6b]/50 py-1 rounded-r-lg bg-[#f8f6f0]/50"
                            >
                              <p className="text-[#3d4a2d]/95 italic text-sm font-display">
                                &ldquo;{config.verses.second.text}&rdquo;
                              </p>
                              <cite className="text-[#6b8e23]/90 text-xs mt-2 block not-italic">
                                — {config.verses.second.reference}
                              </cite>
                            </motion.blockquote>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Carta final - estilo señorita */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/80 rounded-3xl p-6 md:p-8 shadow-pearl border border-[#e0ddd4]/50"
                >
                  <div className="ornament-line w-full mb-5" />
                  <p className="text-[#5c6b4a]/95 text-sm md:text-base leading-[1.9] whitespace-pre-line font-display">
                    {config.finalLetter}
                  </p>
                  <div className="ornament-line w-full mt-5" />
                  {config.messages.signature && (
                    <p className="text-[#6b8e23] text-sm font-display italic text-right mt-4">
                      {config.messages.signature}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
