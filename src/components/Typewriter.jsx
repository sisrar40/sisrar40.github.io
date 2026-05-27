import { useEffect, useMemo, useState } from 'react';

const DEFAULT_SPEEDS = {
  type: 85,
  delete: 45,
  pause: 2200,
};

export default function Typewriter({
  words,
  className = '',
  speeds = DEFAULT_SPEEDS,
}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const typeDelay = speeds.type ?? DEFAULT_SPEEDS.type;
  const deleteDelay = speeds.delete ?? DEFAULT_SPEEDS.delete;
  const pauseDelay = speeds.pause ?? DEFAULT_SPEEDS.pause;

  const longestCh = useMemo(
    () => Math.max(...words.map((w) => w.length), 1),
    [words]
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!words.length) return;

    if (reducedMotion) {
      setText(words[0]);
      return;
    }

    const currentWord = words[wordIndex % words.length];
    let timeoutId;

    if (!isDeleting && text === currentWord) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseDelay);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else if (isDeleting) {
      timeoutId = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deleteDelay);
    } else {
      timeoutId = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typeDelay);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typeDelay, deleteDelay, pauseDelay, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !words.length) return;
    setText('');
    setWordIndex(0);
    setIsDeleting(false);
  }, [words, reducedMotion]);

  if (!words.length) return null;

  return (
    <span
      className={`inline-block align-baseline font-bold text-red-500 ${className}`}
      style={{ minWidth: `${longestCh}ch` }}
      aria-live="polite"
      aria-atomic="true"
    >
      {text}
      {!reducedMotion && (
        <span
          className="ml-0.5 inline-block w-[2px] animate-pulse bg-red-500 align-middle"
          style={{ height: '0.9em' }}
          aria-hidden
        />
      )}
    </span>
  );
}
