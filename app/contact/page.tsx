"use client";

import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

import { Playfair_Display } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import { SiKaggle } from "react-icons/si";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="min-h-screen bg-[#131122] text-white flex items-center justify-start px-6 md:px-24">
        <div className="max-w-3xl space-y-8">
          {/* Garis atas */}
          <div className="w-12 h-[2px] bg-white mb-2" />

          {/* Judul */}
          <h1
            className={`${playfair.className} text-6xl md:text-8xl  leading-tight`}
          >
            Slide Into <br />
            My Inbox!
          </h1>

          {/* Email */}
          <p className="text-sm text-gray-200">
            email:{" "}
            <a
              href="mailto:shabhialiyya3101@gmail.com"
              className="underline underline-offset-2 hover:text-gray-100"
            >
              shabhialiyya3101@gmail.com
            </a>
          </p>

          {/* Icons */}
          <div className="flex gap-6 text-3xl mt-4">
            <a
              href="https://linkedin.com/in/shabhias"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/shabhias"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/shabhias"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.kaggle.com/shabhidzakia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <SiKaggle className="text-4xl" />
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
