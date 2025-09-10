import React, { useEffect, useMemo, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  speedPerCharMs?: number; // ms per character reveal
  scramble?: boolean;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&+=*';

export default function AnimatedText({
  text,
  as = 'span',
  className,
  speedPerCharMs = 18,
  scramble = true,
}: AnimatedTextProps) {
  const Tag = as as any;
  const [display, setDisplay] = useState(text);
  const prevRef = useRef(text);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const from = prevRef.current ?? '';
    const to = text ?? '';
    if (from === to) return;

    const maxLen = Math.max(from.length, to.length);
    const totalDuration = Math.max(220, Math.min(1400, maxLen * speedPerCharMs));
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / totalDuration);
      const reveal = Math.floor(t * maxLen);
      let out = '';
      for (let i = 0; i < maxLen; i++) {
        if (i < reveal) {
          out += to[i] ?? '';
        } else {
          if (!scramble) {
            out += (to[i] ?? '');
          } else {
            const ch = CHARS[(Math.floor(Math.random() * CHARS.length))];
            out += (to[i] ?? ch);
          }
        }
      }
      setDisplay(out);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(to);
        prevRef.current = to;
      }
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, speedPerCharMs, scramble]);

  useEffect(() => {
    prevRef.current = text;
    setDisplay(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Tag className={className} aria-live="polite">{display}</Tag>;
}

