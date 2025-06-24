"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <nav className="fixed top-0 right-23 z-50 p-5">
      <button
        onClick={handleHomeClick}
        className="
          bg-[#211B43] 
          text-white 
          text-sm 
          px-7 py-5 
          font-normal 
          tracking-wide 
          rounded-none 
          cursor-pointer
          hover:bg-[#4F4A6E]
          hover:shadow-md
          hover:scale-105
          active:scale-95
          transition-all duration-200 
          ease-in-out
          hover:border-gray-400
        "
      >
        home
      </button>
    </nav>
  );
};

export default Navbar;
