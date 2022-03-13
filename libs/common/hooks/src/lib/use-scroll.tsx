import { useEffect, useState } from 'react';

export function useScroll() {
  const [lastScroll, setLastScroll] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [delta, setDelta] = useState(0);

  let timer: any = null;

  useEffect(() => {
    const handleScroll = () => {
      if (timer) {
        clearTimeout(timer);
      }
      setScroll(window.scrollY);

      timer = setTimeout(() => {
        setDelta(lastScroll - scroll);
        setLastScroll(scroll);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll, delta]);

  return [scroll, delta];
}
