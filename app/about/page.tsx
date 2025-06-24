import { TabsTransitionPanel } from "@/components/about_tabs/TabsTransactionPanel";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";

export default function AboutPage() {
  return (
    <PageTransition>
      <section
        id="about"
        className="bg-white text-center min-h-screen py-20 flex flex-col justify-center"
      >
        <div className="w-full h-[80px] relative mb-10  mt-10">
          <Image
            src="/self_line2.png"
            alt="strip"
            fill
            className="object-cover grayscale"
          />
        </div>
        {/* Judul */}
        <h2 className="text-3xl text-gray-800 font-light">Hello, its</h2>
        <h1 className="text-5xl text-black font-extrabold mt-2 mb-6 font-serif">
          Shabhi Aliyya Siyauqi Dzakia
        </h1>

        {/* Garis pemisah */}
        <div className="w-full flex justify-center mt-2 mb-8">
          <div className="w-[80%] h-[1px] bg-gray-400" />
        </div>

        {/* Paragraf */}
        <div className="max-w-3xl mx-auto px-6 text-gray-700 space-y-4 text-[16px] text-justify">
          <p>
            I am a Computer Science student at the University of Indonesia,
            currently focusing on Data Science. My areas of interest include
            machine learning, data visualization, and statistical analysis. I’m
            actively building projects and gaining hands-on experience to become
            a skilled Data Scientist.
          </p>
          <p>
            During my time at university, I joined a student organization as
            part of the creative team. It was a space where I could express
            ideas visually and conceptually — from designing content to
            brainstorming for campaigns. What I enjoyed the most was the open
            exchange of ideas and collaboration with passionate peers. It really
            shaped my ability to think creatively and work as part of a dynamic
            team.
          </p>
          <p>
            I aspire to pursue a career as a data scientist contributing to
            impactful solutions through data-driven technology. Additionally, I
            aim to build digital tools or platforms that make data more
            accessible and beneficial for others in their daily lives.
          </p>
        </div>

        {/* Garis pemisah */}
        <div className="w-full flex justify-center mt-10 mb-8">
          <div className="w-[80%] h-[1px] bg-gray-400" />
        </div>
        <div className=" mb-16">
          <TabsTransitionPanel />
        </div>

        {/* Tambahan link di bawahnya */}
        <p className=" text-[#131122] text-[16px] bg-[#FBFBFB] px-6 py-9  ">
          <a
            href="contact"
            target=""
            rel="noopener noreferrer"
            className="underline text-black hover:text-blue-800"
          >
            CV
          </a>{" "}
          . You can also find me{" "}
          <a
            href="contact"
            target=""
            rel="noopener noreferrer"
            className="underline text-black hover:text-blue-800"
          >
            on the internet
          </a>
          .
        </p>
      </section>
    </PageTransition>
  );
}
