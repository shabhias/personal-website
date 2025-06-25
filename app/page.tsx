import Image from "next/image";

import { Playfair_Display } from "next/font/google";
import PageTransition from "@/components/PageTransition";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen text-white font-sans">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-28 py-10 bg-white text-black text-center md:text-left">
          {/* Left side: Bio + Photo */}
          <div className="space-y-5 max-w-md">
            <p className="font-bold text-xl text-black">
              SHABHI,{" "}
              <span className="font-normal text-gray-700">
                computer science student at University of Indonesia
              </span>
            </p>
            <Image
              src="/self_image3.jpg"
              alt="Shabhi on steps"
              width={500}
              height={500}
              className="border shadow-md"
            />
          </div>

          {/* Right side: Menu */}
          <div className={`${playfair.className} text-right space-y-7 pt-36`}>
            <a
              href="about"
              className="block text-8xl font-bold text-black hover:text-[#7B7272]  transition-colors"
            >
              ABOUT
            </a>
            <a
              href="project"
              className="block text-8xl font-semibold text-gray-700 hover:text-black transition-colors"
            >
              PROJECT
            </a>
            <a
              href="contact"
              className="block text-8xl font-medium  text-[#7B7272] hover:text-gray-700 transition-colors"
            >
              CONTACT
            </a>
          </div>
        </section>
        {/* ✅ LIFE OUTSIDE CODE SECTION */}
        <section id="life" className="bg-white text-center text-black">
          {/* Garis hitam tipis */}
          <div className="w-full h-[3px] bg-black" />

          {/* Judul tengah */}
          <h2 className="text-4xl italic font-semibold text-gray-200 py-4 tracking-wider">
            LIFE OUTSIDE CODE
          </h2>

          {/* Gambar besar */}
          <div className="relative h-screen w-full overflow-hidden">
            <Image
              src="/photo_1.JPG"
              alt="Black and white"
              fill
              className="object-cover grayscale"
            />

            {/* Optional overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white text-center">
              <h3 className="text-xl font-bold mb-2">Urban Reflections</h3>
              <p className="text-sm">
                enjoy capturing moments through photography
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
