import { useRef } from 'react';

export const useDebounce = (func: (...args: unknown[]) => void, delay: number = 300) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleDebounceFunc = (...args: unknown[]) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  };

  return { handleDebounceFunc };
};
