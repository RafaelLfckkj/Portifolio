"use client";

import { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const customInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {}, []);

  const options: ISourceOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "#050E15" },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: false, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: "#ffffff6c" },
      links: { enable: true, color: "#8a8a8a37", distance: 150 },
      move: { enable: true, speed: 2 },
      number: { value: 60 },
      size: { value: { min: 1, max: 4 } },
    },
  };

  return (
    <ParticlesProvider init={customInit}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </ParticlesProvider>
  );
}