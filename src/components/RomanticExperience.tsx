"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "@/config";
import FloatingHearts from "./FloatingHearts";
import TypewriterText from "./TypewriterText";

type Screen = "initial" | "transition" | "main" | "surprise";

export default function RomanticExperience() {
  const [screen, setScreen] = useState<Screen>("initial");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [showSecondVerse, setShowSecondVerse] = useState(false);

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

  const handleSurpriseClick = () => {
    setShowSurprise(true);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        {/* Pantalla inicial */}
        {screen === "initial" && (
          <motion.div
            key="initial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-rose-50 via-white to-amber-50"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center max-w-md"
            >
              <p className="text-xl md:text-2xl text-rose-800/90 font-light mb-8 leading-relaxed">
                {config.messages.welcome}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.input
                  type="text"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Ingresa la clave ✨"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-rose-200/80 bg-white/80 backdrop-blur-sm text-rose-900 placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent shadow-sm transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                />

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-rose-500 text-sm"
                    >
                      {config.messages.wrongPassword}
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-400 to-amber-300 text-white font-medium shadow-lg shadow-rose-200/50 hover:shadow-xl hover:shadow-rose-300/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Entrar
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Transición sorpresa */}
        {screen === "transition" && (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-rose-950/95 to-rose-900/98"
          >
            <FloatingHearts />
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-rose-100 text-lg md:text-xl font-light text-center z-10"
            >
              {config.messages.loading}
            </motion.p>
            <motion.div
              className="mt-6 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full bg-rose-300"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Pantalla principal */}
        {screen === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center px-4 py-8 pb-16 bg-gradient-to-br from-rose-50 via-white to-amber-50"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full max-w-md"
            >
              {/* Tarjeta principal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl shadow-rose-100/50 overflow-hidden border border-rose-100/50"
              >
                {/* Foto */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-rose-100 to-amber-100 overflow-hidden">
                  <img
                    src={config.photoUrl}
                    alt="Foto especial"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <div className="hidden absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">💐</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-5">
                  <h1 className="text-2xl md:text-3xl font-semibold text-rose-800 text-center font-elegant">
                    {config.messages.mainTitle}
                  </h1>
                  <p className="text-rose-700/90 text-center leading-relaxed">
                    {config.messages.mainSubtitle}
                  </p>

                  {/* Primer versículo */}
                  <blockquote className="border-l-4 border-amber-300 pl-4 py-2 bg-amber-50/50 rounded-r-xl">
                    <p className="text-rose-800/90 italic text-sm md:text-base font-elegant">
                      &ldquo;{config.verses.first.text}&rdquo;
                    </p>
                    <cite className="text-amber-700/80 text-xs mt-1 block">
                      — {config.verses.first.reference}
                    </cite>
                  </blockquote>

                  {/* Botón sorpresa */}
                  <motion.button
                    onClick={handleSurpriseClick}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-400 to-amber-300 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {config.messages.buttonLabel}
                  </motion.button>

                  {/* Texto sorpresa (typewriter) */}
                  <AnimatePresence>
                    {showSurprise && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0 }}
                        className="pt-4 border-t border-rose-100"
                      >
                        <TypewriterText
                          text={config.messages.surpriseText}
                          onComplete={() => setShowSecondVerse(true)}
                          className="text-rose-800 text-center font-medium"
                        />
                        <AnimatePresence>
                          {showSecondVerse && (
                            <motion.blockquote
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                              className="mt-4 border-l-4 border-amber-300 pl-4 py-2 bg-amber-50/50 rounded-r-xl"
                            >
                              <p className="text-rose-800/90 italic text-sm font-elegant">
                                &ldquo;{config.verses.second.text}&rdquo;
                              </p>
                              <cite className="text-amber-700/80 text-xs mt-1 block">
                                — {config.verses.second.reference}
                              </cite>
                            </motion.blockquote>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Carta final */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="pt-6"
                  >
                    <div className="bg-rose-50/80 rounded-2xl p-5 border border-rose-100/50">
                      <p className="text-rose-800/90 text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {config.finalLetter}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
