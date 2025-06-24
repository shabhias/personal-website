"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);

    const timeout1 = setTimeout(() => {
      setDisplayedChildren(children);
    }, 300); // waktu fade out

    const timeout2 = setTimeout(() => {
      setIsTransitioning(false);
    }, 800); // total durasi

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [pathname, children]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* White Wipe Transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="transition"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-white z-[9999] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Page Content with Blur */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 30, filter: "blur(7px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: isTransitioning ? "blur(7px)" : "blur(0px)",
        }}
        transition={{
          duration: 0.5,
          delay: isTransitioning ? 0.2 : 0,
          ease: "easeInOut",
        }}
      >
        {displayedChildren}
      </motion.div>
    </div>
  );
};

export default PageTransition;
