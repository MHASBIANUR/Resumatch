"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Instagram,
  Menu,
  X,
  Send,
  Sun,
  Moon,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const fiturRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const [menuVisible, setMenuVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("resumatch-theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("resumatch-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const scrollToSmooth = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuVisible(false);
  };

  const navItems = [
    { name: "Home", ref: heroRef },
    { name: "Features", ref: fiturRef },
    { name: "About", ref: aboutRef },
    { name: "Contact", ref: contactRef },
  ];

  return (
    <div
      className={`flex flex-col min-h-screen font-sans transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        }`}
    >
      {/* === NAVBAR === */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${darkMode
            ? "bg-gray-900/90 border-gray-700 text-white"
            : "bg-white/90 border-gray-200 text-gray-800"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
          <div
            className="text-lg sm:text-2xl font-extrabold text-blue-600 cursor-pointer"
            onClick={() => scrollToSmooth(heroRef)}
          >
            RESUMATCH
          </div>

          <ul className="hidden md:flex gap-8 font-medium">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                onClick={() => scrollToSmooth(item.ref)}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                {item.name}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuVisible(!menuVisible)}
              className="md:hidden"
            >
              {menuVisible ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`absolute top-14 right-0 w-full shadow-md flex flex-col items-center py-5 gap-5 md:hidden ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
              }`}
          >
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSmooth(item.ref)}
                className="text-base font-semibold hover:text-blue-500"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* === HERO === */}
      <section
        ref={heroRef}
        className="flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-7xl mx-auto px-5 sm:px-6 md:px-12 min-h-screen pt-24 sm:pt-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-4 sm:space-y-6"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Hey, Everyone 👋
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            RESUMATCH helps you find your best career match — powered by AI
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Upload CV kamu langsung lewat Telegram bot kami, dan biarkan AI
            menilai kecocokanmu dengan lowongan pekerjaan impian.
          </p>

          <div className="hidden md:flex justify-start">
            <button
              onClick={() =>
                window.open("https://t.me/Resumatchh_bot", "_blank")
              }
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition text-sm sm:text-base shadow-md"
            >
              <Send size={18} />
              Kirim CV via Telegram
            </button>
          </div>
        </motion.div>

        {/* === MOBILE PREVIEW === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-center justify-center mt-10 md:mt-0"
        >
          <div
            className={`relative w-[230px] sm:w-[260px] h-[460px] sm:h-[500px] border-4 rounded-[35px] shadow-xl flex flex-col items-center justify-center ${darkMode
                ? "bg-gray-800 border-gray-600 text-gray-300"
                : "bg-gray-100 border-black text-gray-600"
              }`}
          >
            <p className="text-sm">AI Matching...</p>
            <div className="absolute bottom-6 sm:bottom-8 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm shadow-md">
              Smart Resume Match
            </div>
          </div>

          <div className="mt-6 md:hidden flex flex-col items-center">
            <button
              onClick={() =>
                window.open("https://t.me/Resumatchh_bot", "_blank")
              }
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition text-sm sm:text-base shadow-md"
            >
              <Send size={18} />
              Kirim CV via Telegram
            </button>
            <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
              Smart Resume Match
            </p>
          </div>
        </motion.div>
      </section>

      {/* === FEATURES === */}
      <section
        ref={fiturRef}
        className={`w-full flex flex-col items-center justify-center text-center min-h-screen px-4 py-20 transition ${darkMode ? "bg-gray-800" : "bg-gray-50"
          }`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">⚙️ Cara Kerja RESUMATCH</h2>
        <p
          className={`max-w-2xl mx-auto text-sm sm:text-base mb-12 ${darkMode ? "text-gray-400" : "text-gray-600"
            }`}
        >
          Sistem ini menghubungkan CV kamu dengan AI melalui Telegram untuk menemukan
          lowongan kerja paling sesuai — cepat dan otomatis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "1️⃣ Kirim CV via Telegram",
              desc: "Kirim CV kamu langsung ke bot kami. File otomatis tersimpan di Supabase.",
            },
            {
              title: "2️⃣ Analisis oleh AI",
              desc: "n8n memproses data CV menggunakan Gemini untuk mengenali keahlian dan pengalamanmu.",
            },
            {
              title: "3️⃣ Hasil ke Telegram",
              desc: "AI mengirim rekomendasi lowongan yang cocok langsung kembali ke chat kamu.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl p-6 shadow-md border transition ${darkMode
                  ? "bg-gray-900 border-gray-700 text-gray-300"
                  : "bg-white border-gray-200 text-gray-700"
                }`}
            >
              <h3 className="text-lg font-semibold mb-2 text-blue-500">
                {item.title}
              </h3>
              <p className="text-sm opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* === ABOUT === */}
      <section
        ref={aboutRef}
        className={`min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 py-10 transition ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
          }`}
      >
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-extrabold leading-snug"
          >
            The <span className="text-blue-600">User is the Hero</span> of Our
            Platform
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`mt-3 text-sm sm:text-base leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"
              }`}
          >
            RESUMATCH lahir dari ide sederhana — membantu setiap individu
            memahami potensi karirnya. Kami percaya teknologi AI dapat membuka
            peluang dan menghemat waktu dalam mencari pekerjaan impian.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`mt-8 rounded-2xl p-6 sm:p-8 shadow-lg relative transition ${darkMode ? "bg-gray-800" : "bg-[#473b3b]"
              } text-white`}
          >
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              “Saya menciptakan RESUMATCH untuk membantu para pencari kerja
              memahami nilai unik mereka dan menemukan peluang yang benar-benar
              cocok. Teknologi AI seharusnya mempermudah hidup, bukan
              memperumitnya.”
            </p>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img
                src="/images/foto.jpg"
                alt="Founder"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Ranggah Rajasa
                </h4>
                <p className="text-xs text-gray-300">Founder of RESUMATCH</p>
                <div className="flex text-yellow-400 text-xs mt-0.5">
                  ★★★★★
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer
        ref={contactRef}
        className="bg-blue-600 text-white flex flex-col justify-center px-5 sm:px-6 py-10"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">RESUMATCH</h3>
            <p className="text-sm opacity-80">
              Optimalkan peluang karirmu dengan AI cerdas. Kami bantu kamu
              menemukan posisi terbaik.
            </p>
            <button
              onClick={() =>
                window.open("https://t.me/Resumatchh_bot", "_blank")
              }
              className="bg-white text-blue-600 px-5 py-2 rounded-full font-semibold mt-4 hover:bg-gray-100 transition text-sm"
            >
              Coba via Telegram
            </button>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>About</li>
              <li>Workflow</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Get in Touch</h4>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/in/muhammad-hasbianur-4277361a6/" target="_blank">
                <Linkedin className="hover:text-gray-200 transition" />
              </a>
              <a href="https://github.com/MHASBIANUR" target="_blank">
                <Github className="hover:text-gray-200 transition" />
              </a>
              <a href="https://www.instagram.com/hasbii.nur/" target="_blank">
                <Instagram className="hover:text-gray-200 transition" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs sm:text-sm opacity-70 border-t border-white/20 pt-6">
          © {new Date().getFullYear()} RESUMATCH. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
