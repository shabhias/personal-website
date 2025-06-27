"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl?: string;
  readMoreUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  websiteUrl,
  readMoreUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="w-[360px]  bg-white text-black  overflow-hidden shadow-md border-[5px] border-[#fff]">
      <div className="relative h-[180px] w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4 text-sm space-y-4">
        <p className="text-gray-800">{description}</p>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {websiteUrl && (
              <Link
                href={websiteUrl}
                target="_blank"
                className="bg-[#111132] text-white text-xs px-4 py-3 hover:bg-black"
              >
                website
              </Link>
            )}
            {readMoreUrl && (
              <Link
                href={readMoreUrl}
                target="_blank"
                className="bg-[#111132] text-white text-xs px-4 py-3 hover:bg-black"
              >
                read more
              </Link>
            )}
          </div>

          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="text-gray-700 hover:text-black text-xl"
            >
              <FaGithub className="w-10 h-10 text-black hover:text-gray-700" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
