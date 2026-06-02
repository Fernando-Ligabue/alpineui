"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";

const slides = [
  { color: "bg-blue-500", label: "Slide 1" },
  { color: "bg-green-500", label: "Slide 2" },
  { color: "bg-purple-500", label: "Slide 3" },
  { color: "bg-amber-500", label: "Slide 4" },
  { color: "bg-pink-500", label: "Slide 5" },
];

const images = [
  { src: "https://picsum.photos/seed/mountain/400/250", alt: "Mountain" },
  { src: "https://picsum.photos/seed/beach/400/250", alt: "Beach" },
  { src: "https://picsum.photos/seed/forest/400/250", alt: "Forest" },
  { src: "https://picsum.photos/seed/stars/400/250", alt: "Stars" },
  { src: "https://picsum.photos/seed/nature/400/250", alt: "Nature" },
];

function InteractiveCarousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-lg">
      <div className="relative h-64">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center justify-center text-white text-2xl font-bold transition-opacity duration-300 ${slide.color} ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            {slide.label}
          </div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors">
        <ChevronLeft className="w-5 h-5 text-gray-900" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors">
        <ChevronRight className="w-5 h-5 text-gray-900" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

function MultiItemCarousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  const getSlidePosition = (i: number) => {
    const prevIdx = current === 0 ? total - 1 : current - 1;
    const nextIdx = current === total - 1 ? 0 : current + 1;
    if (i === prevIdx) return { left: "0%", scale: 0.9, zIndex: 5, opacity: 1 };
    if (i === current) return { left: "33.33%", scale: 1.05, zIndex: 10, opacity: 1 };
    if (i === nextIdx) return { left: "66.66%", scale: 0.9, zIndex: 5, opacity: 1 };
    return { left: "0%", scale: 0.9, zIndex: 0, opacity: 0 };
  };

  return (
    <div className="relative w-full max-w-2xl overflow-hidden rounded-lg">
      <div className="relative h-48 flex items-center">
        {slides.map((slide, i) => {
          const pos = getSlidePosition(i);
          return (
            <div
              key={i}
              className={`absolute inset-y-4 w-1/3 flex items-center justify-center text-white text-xl font-bold rounded-lg transition-all duration-300 ${slide.color}`}
              style={{
                left: pos.left,
                opacity: pos.opacity,
                zIndex: pos.zIndex,
                transform: `scale(${pos.scale})`,
              }}
            >
              {slide.label}
            </div>
          );
        })}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors z-20">
        <ChevronLeft className="w-4 h-4 text-gray-900" />
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors z-20">
        <ChevronRight className="w-4 h-4 text-gray-900" />
      </button>
      <div className="flex justify-center gap-2 pb-3 pt-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-gray-800" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

function AutoplayCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c === total - 1 ? 0 : c + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, total]);

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-lg">
      <div className="relative h-64">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center justify-center text-white text-2xl font-bold transition-opacity duration-500 ${slide.color} ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <div className="text-center">
              <div>{slide.label}</div>
              <div className="text-sm font-normal mt-2 opacity-80">Auto-advances every 3s</div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors">
        <ChevronLeft className="w-5 h-5 text-gray-900" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors">
        <ChevronRight className="w-5 h-5 text-gray-900" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
        <button
          onClick={() => setPaused(!paused)}
          className={`ml-2 px-2 py-1 text-xs rounded transition-colors ${paused ? "bg-red-500 text-white" : "bg-white/20 text-white"}`}
        >
          {paused ? "Resume" : "Pause"}
        </button>
      </div>
    </div>
  );
}

function ThumbnailCarousel() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <div className="w-full max-w-lg">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <div className="relative h-64">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-300 ${i === current ? "opacity-100" : "opacity-0"}`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors">
          <ChevronLeft className="w-5 h-5 text-gray-900" />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors">
          <ChevronRight className="w-5 h-5 text-gray-900" />
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${i === current ? "border-gray-900 opacity-100" : "border-transparent opacity-60 hover:opacity-80"}`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function CarouselPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Carousel</h1>
      <p className="text-gray-500 mb-8">An image or content slider with navigation controls. Multiple variants for different use cases.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic</h2>
        <DemoBlock
          preview={<InteractiveCarousel />}
          code={`<div x-data="{ current: 0 }" class="relative w-full max-w-lg overflow-hidden rounded-lg">
  <div class="relative h-64">
    <template x-for="(slide, i) in [
      { color: 'bg-blue-500', label: 'Slide 1' },
      { color: 'bg-green-500', label: 'Slide 2' },
      { color: 'bg-purple-500', label: 'Slide 3' },
      { color: 'bg-amber-500', label: 'Slide 4' },
      { color: 'bg-pink-500', label: 'Slide 5' },
    ]" :key="i">
      <div x-show="current === i"
        class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold transition-opacity duration-300"
        :class="slide.color" x-text="slide.label">
      </div>
    </template>
  </div>

  <button @click="current = current === 0 ? 4 : current - 1"
    class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md">
    <svg class="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  </button>

  <button @click="current = current === 4 ? 0 : current + 1"
    class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md">
    <svg class="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </button>

  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
    <template x-for="(slide, i) in [0,1,2,3,4]" :key="i">
      <button @click="current = i"
        :class="current === i ? 'bg-white' : 'bg-white/50'"
        class="w-2.5 h-2.5 rounded-full transition-colors">
      </button>
    </template>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Multi-Item</h2>
        <p className="text-gray-500 mb-4">Shows three slides at once — previous, current (highlighted), and next.</p>
        <DemoBlock
          preview={<MultiItemCarousel />}
          code={`<div x-data="{ current: 0, prev() { this.current = this.current === 0 ? 4 : this.current - 1 }, next() { this.current = this.current === 4 ? 0 : this.current + 1 } }" class="relative w-full max-w-2xl overflow-hidden rounded-lg">
  <div class="relative h-48 flex items-center">
    <template x-for="(slide, i) in [
      { color: 'bg-blue-500', label: 'Slide 1' },
      { color: 'bg-green-500', label: 'Slide 2' },
      { color: 'bg-purple-500', label: 'Slide 3' },
      { color: 'bg-amber-500', label: 'Slide 4' },
      { color: 'bg-pink-500', label: 'Slide 5' },
    ]" :key="i">
      <div x-show="(i === current) || (i === (current === 0 ? 4 : current - 1)) || (i === (current === 4 ? 0 : current + 1))"
        class="absolute inset-y-4 w-1/3 flex items-center justify-center text-white text-xl font-bold rounded-lg transition-all duration-300"
        :class="slide.color"
        x-text="slide.label"
        :style="'left: ' + (i === current ? '33.33%' : (i === (current === 0 ? 4 : current - 1) ? '0%' : '66.66%')) + '; z-index: ' + (i === current ? 10 : 5) + '; transform: scale(' + (i === current ? 1.05 : 0.9) + ')'">
      </div>
    </template>
  </div>

  <button @click="prev()"
    class="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md z-20">
    <svg class="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  </button>

  <button @click="next()"
    class="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md z-20">
    <svg class="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </button>

  <div class="flex justify-center gap-2 pb-3 pt-2">
    <template x-for="(_, i) in [0,1,2,3,4]" :key="i">
      <button @click="current = i"
        :class="current === i ? 'bg-gray-800' : 'bg-gray-300'"
        class="w-2 h-2 rounded-full transition-colors">
      </button>
    </template>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Autoplay</h2>
        <p className="text-gray-500 mb-4">Automatically advances through slides with optional pause control.</p>
        <DemoBlock
          preview={<AutoplayCarousel />}
          code={`<div x-data="{
    current: 0,
    paused: false,
    interval: null,
    init() {
      this.interval = setInterval(() => {
        if (!this.paused) {
          this.current = this.current === 4 ? 0 : this.current + 1;
        }
      }, 3000);
    },
    destroy() {
      clearInterval(this.interval);
    }
  }" class="relative w-full max-w-lg overflow-hidden rounded-lg">

  <div class="relative h-64">
    <template x-for="(slide, i) in [
      { color: 'bg-blue-500', label: 'Slide 1' },
      { color: 'bg-green-500', label: 'Slide 2' },
      { color: 'bg-purple-500', label: 'Slide 3' },
      { color: 'bg-amber-500', label: 'Slide 4' },
      { color: 'bg-pink-500', label: 'Slide 5' },
    ]" :key="i">
      <div x-show="current === i"
        class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold transition-opacity duration-500"
        :class="slide.color">
        <div class="text-center">
          <div x-text="slide.label"></div>
          <div class="text-sm font-normal mt-2 opacity-80">Auto-advances every 3s</div>
        </div>
      </div>
    </template>
  </div>

  <button @click="current = current === 0 ? 4 : current - 1"
    class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md">
    <svg class="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  </button>

  <button @click="current = current === 4 ? 0 : current + 1"
    class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md">
    <svg class="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </button>

  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
    <template x-for="(_, i) in [0,1,2,3,4]" :key="i">
      <button @click="current = i"
        :class="current === i ? 'bg-white' : 'bg-white/50'"
        class="w-2.5 h-2.5 rounded-full transition-colors">
      </button>
    </template>
    <button @click="paused = !paused"
      :class="paused ? 'bg-red-500 text-white' : 'bg-white/20 text-white'"
      class="ml-2 px-2 py-1 text-xs rounded transition-colors"
      x-text="paused ? 'Resume' : 'Pause'">
    </button>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Thumbnails</h2>
        <p className="text-gray-500 mb-4">Image carousel with clickable thumbnail navigation.</p>
        <DemoBlock
          preview={<ThumbnailCarousel />}
          code={`<div x-data="{ current: 0 }" class="w-full max-w-lg">
  <div class="relative overflow-hidden rounded-lg mb-3">
    <div class="relative h-64">
      <template x-for="(img, i) in [
        { src: 'https://picsum.photos/seed/mountain/400/250', alt: 'Mountain' },
        { src: 'https://picsum.photos/seed/beach/400/250', alt: 'Beach' },
        { src: 'https://picsum.photos/seed/forest/400/250', alt: 'Forest' },
        { src: 'https://picsum.photos/seed/stars/400/250', alt: 'Stars' },
        { src: 'https://picsum.photos/seed/nature/400/250', alt: 'Nature' },
      ]" :key="i">
        <div x-show="current === i" class="absolute inset-0 transition-opacity duration-300">
          <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover">
        </div>
      </template>
    </div>

    <button @click="current = current === 0 ? 4 : current - 1"
      class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md">
      <svg class="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>

    <button @click="current = current === 4 ? 0 : current + 1"
      class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md">
      <svg class="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  </div>

  <div class="flex gap-2 overflow-x-auto pb-1">
    <template x-for="(img, i) in [
      { src: 'https://picsum.photos/seed/mountain/400/250', alt: 'Mountain' },
      { src: 'https://picsum.photos/seed/beach/400/250', alt: 'Beach' },
      { src: 'https://picsum.photos/seed/forest/400/250', alt: 'Forest' },
      { src: 'https://picsum.photos/seed/stars/400/250', alt: 'Stars' },
      { src: 'https://picsum.photos/seed/nature/400/250', alt: 'Nature' },
    ]" :key="i">
      <button @click="current = i"
        :class="current === i ? 'border-gray-900 opacity-100' : 'border-transparent opacity-60 hover:opacity-80'"
        class="flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all">
        <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover">
      </button>
    </template>
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
