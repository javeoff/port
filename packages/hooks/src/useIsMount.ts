import { useLayoutEffect, useMemo, useRef } from 'react';

export const useIsMount = () => {
  const isMountRef = useRef<boolean>(false);
  const isMount = useMemo(() => isMountRef.current, []);

  useLayoutEffect(() => {
    isMountRef.current = true;

    return () => {
      isMountRef.current = false;
    };
  }, []);

  return isMount;
};
