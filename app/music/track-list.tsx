"use client";

import { useEffect, useRef, useState } from "react";

type Track = { title: string; sample?: string };

export default function TrackList({ tracks }: { tracks: Track[] }) {
  // Index of the currently-playing track, or null if nothing is playing.
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Stop audio and clear state on unmount (client-side nav).
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  function toggle(i: number, sample: string) {
    // Clicking the currently-playing row pauses it.
    if (playingIndex === i && audioRef.current) {
      audioRef.current.pause();
      setPlayingIndex(null);
      return;
    }

    // Otherwise, stop whatever was playing and start this one.
    audioRef.current?.pause();
    const audio = new Audio(sample);
    audio.addEventListener("ended", () => {
      setPlayingIndex((current) => (current === i ? null : current));
    });
    audioRef.current = audio;
    setPlayingIndex(i);
    audio.play().catch(() => {
      // Autoplay/browser block; reset state so the UI stays honest.
      setPlayingIndex(null);
    });
  }

  return (
    <ol className="mt-10 space-y-3">
      {tracks.map((track, i) => {
        const isPlaying = playingIndex === i;
        return (
          <li
            key={track.title}
            className="flex items-center gap-5 rounded-xl border border-navy/10 bg-cream/70 px-5 sm:px-6 py-4 hover:border-gold/50 transition-colors"
          >
            <span className="font-serif text-2xl sm:text-3xl text-gold font-semibold w-10 shrink-0 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 font-serif text-lg sm:text-xl text-navy leading-snug">
              {track.title}
            </span>
            {track.sample ? (
              <button
                type="button"
                onClick={() => toggle(i, track.sample!)}
                aria-label={
                  isPlaying
                    ? `Pause sample of ${track.title}`
                    : `Play sample of ${track.title}`
                }
                aria-pressed={isPlaying}
                className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy hover:bg-navy hover:text-cream transition-colors"
              >
                {isPlaying ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="currentColor"
                    aria-hidden="true"
                    style={{ marginLeft: 2 }}
                  >
                    <path d="M7 4.5v15l13-7.5L7 4.5Z" />
                  </svg>
                )}
              </button>
            ) : (
              <span
                aria-hidden="true"
                className="shrink-0 h-10 w-10 rounded-full border border-dashed border-navy/15"
                title="Sample coming soon"
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
