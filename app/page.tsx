"use client";

import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

import  Cursor  from "@/components/common/cursor"
import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const DEBOUNCE_TIME = 100;


export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setisDesktop] = useState(true);

  let timer: NodeJS.Timeout|null = null;

  const debouncedDimensionCalculator = () => {
    if(timer)clearTimeout(timer);
    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.screen.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setisDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  };

  useEffect(() => {
    debouncedDimensionCalculator();

    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, [timer]);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
      <Cursor isDesktop={isDesktop} />
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
