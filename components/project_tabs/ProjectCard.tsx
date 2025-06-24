"use client";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl?: string;
  readMoreUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  websiteUrl,
  readMoreUrl,
}: ProjectCardProps) {
  return (
    <div className="w-[360px]  bg-white text-black  overflow-hidden shadow-md border-[5px] border-[#fff]">
      <div className="relative h-[180px] w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4 text-sm space-y-4">
        <p className="text-gray-800">{description}</p>

        <div className="flex gap-2 justify-start ">
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
              className="bg-[#111132] text-white text-xs px-4 py-3  hover:bg-black"
            >
              read more
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
