import { RefObject, useEffect } from 'react';

export function useClickedOutside(
  ref: RefObject<HTMLElement>[],
  callback: () => void,
  ignore?: RefObject<HTMLElement>[]
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      ref.forEach((r) => {
        if (
          r.current &&
          !r.current.contains(event.target) &&
          !ignore?.includes(r)
        ) {
          callback();
        }
      });
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, ignore]);
}
