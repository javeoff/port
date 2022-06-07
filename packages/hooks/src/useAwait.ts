import { Dispatch, SetStateAction, useState } from 'react';

import { useAsync } from './useAsync';

interface IResult<Result> {
  data?: Result | undefined;
  setData: Dispatch<SetStateAction<Result | undefined>>;
}

export const useAwait = <Result>(
  fn: Promise<Result | null>,
  args: unknown[],
): IResult<Result> => {
  const [data, setData] = useState<Result>();

  useAsync(async () => {
    fn.then((result) => {
      setData(result || undefined);
    });
  }, [...args]);

  return { data, setData };
};
