import { useCallback, useLayoutEffect, useRef } from 'react';

/*
 * Cache data used in function and disable rerender
 * with data updating if change exists
 */
export const useEvent = <Handler extends (...args: unknown[]) => unknown>(
  handler: Handler,
): VoidFunction => {
  const handleRef = useRef<Handler | null>(null);

  useLayoutEffect(() => {
    handleRef.current = handler;
  });

  return useCallback((...args: unknown[]) => {
    const fn = handleRef.current;

    if (!fn) {
      return;
    }

    return fn(...args);
  }, []);
};
