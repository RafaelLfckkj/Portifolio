"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // anima só uma vez, não repete toda vez que rola pra cima/baixo
      easing: "ease-out-cubic",
    });
  }, []);

  return null; // não renderiza nada visualmente, só inicializa
}   