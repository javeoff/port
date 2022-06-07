import { useEffect } from 'react';

export const useAsync = (
  callback: (...args: unknown[]) => Promise<void>,
  args: unknown[],
): void =>
  useEffect(() => {
    (async () => {
      await callback();
    })();
  }, args);
