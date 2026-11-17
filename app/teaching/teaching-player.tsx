"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const episodes = [
  {
    id: "CTNyJUdHCW8",
    number: 1,
    title: "The Promise Hidden in the Great Commission",
    description:
      "You are a new creation in Christ — not an improved version of the old you. But if that's true, why do we still struggle with the old man? Robin opens with the tension every believer faces and walks through the story of Cornelius in Acts 10 to reveal the pattern God designed for receiving grace.",
    scripture: "2 Corinthians 5:17 · Galatians 2:20 · Ephesians 2:8-9 · Acts 10",
    oneLiner: "The old man is crucified. So how do you walk in the new one?",
  },
  {
    id: "2nN_Yl68Ucw",
    number: 2,
    title: "The Seared Conscience",
    description:
      "Grace isn't just a word — there's a pattern for how it operates. Robin walks through each step: hearing the Word, believing even when experience says otherwise, speaking life instead of death, and letting the Word do the work in you. The old covenant gave commandments to do. The new covenant gives words to believe.",
    scripture:
      "Romans 10:17 · Mark 9:21-27 · Proverbs 18:21 · 1 Thessalonians 2:13",
    oneLiner:
      "Hear, believe, speak, receive — the pattern inside every promise.",
  },
  {
    id: "hZY3HnusYn0",
    number: 3,
    title: "The Love That Never Leaves",
    description:
      "Two rich men — one walked away sad, the other was changed from the inside out. Robin contrasts the rich young ruler with Zacchaeus to show the difference between an old covenant mindset and a new covenant heart. Then she walks through Isaiah 53, revealing everything Jesus exchanged at the cross.",
    scripture: "Luke 18:18-27 · Luke 19:1-10 · Isaiah 53:1-12",
    oneLiner: "Everything He bore, so you could walk free.",
  },
];

export default function TeachingPlayer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);
  const active = episodes[activeIndex];

  function selectEpisode(index: number) {
    setActiveIndex(index);
    playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Featured video + description */}
      <section ref={playerRef} className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-start">
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ aspectRatio: "16/9" }}>
              <iframe
                key={active.id}
                src={`https://www.youtube.com/embed/${active.id}`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy">
                Episode {active.number}: {active.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-navy/80 leading-relaxed">
                {active.description}
              </p>
              <p className="mt-3 text-gold italic text-sm">
                {active.scripture}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Episode cards */}
      <section className="mx-auto max-w-6xl px-6 pb-10 sm:pb-12">
        <p className="text-gold font-medium tracking-widest uppercase text-xs mb-4">
          All Episodes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {episodes.map((ep, i) => (
            <button
              key={ep.id}
              onClick={() => selectEpisode(i)}
              className={`group text-left rounded-xl overflow-hidden bg-navy transition-all hover:ring-2 hover:ring-gold/60 ${
                i === activeIndex ? "ring-2 ring-gold" : ""
              }`}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={`https://img.youtube.com/vi/${ep.id}/maxresdefault.jpg`}
                  alt={ep.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 rounded-md bg-gold px-2 py-0.5 text-xs font-bold text-navy">
                  EP {ep.number}
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-serif text-sm font-semibold text-cream">
                  {ep.title}
                </h3>
                <p className="mt-1 text-xs text-[#b8c8d8] leading-snug">
                  {ep.oneLiner}
                </p>
              </div>
            </button>
          ))}
        </div>
        <p className="mt-6 text-center">
          <a
            href="https://www.youtube.com/@RobinUrban-w3s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy font-medium underline underline-offset-4 decoration-gold/50 decoration-2 hover:text-gold transition-colors"
          >
            Watch more on YouTube <span aria-hidden="true">→</span>
          </a>
        </p>
      </section>
    </>
  );
}
