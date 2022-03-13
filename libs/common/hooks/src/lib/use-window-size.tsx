import { useEffect, useState } from 'react';

interface WindowState {
  width?: number;
  height?: number;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowState>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
