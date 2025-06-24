import PageTransition from "@/components/PageTransition";
import ProjectSection from "@/components/project_tabs/ProjectSection";

export default function ProjectPage() {
  return (
    <PageTransition>
    <main className="flex flex-col min-h-screen bg-[#111] text-white">
      {/* Konten utama */}
      <section id="project" className="flex-grow mt-10">
        <ProjectSection />
      </section>
    </main>
    </PageTransition>
  );
}
