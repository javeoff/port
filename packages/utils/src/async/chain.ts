type TChain = (prevChain: IContext | null) => IContext;

interface IContext<Arguments extends unknown[] = unknown[]> {
  (prevChain?: IContext | null): void;
  args: Arguments | null;
  fn: ((args: Arguments | null, cb: () => void) => unknown) | null;
  prevChain: IContext | null;
  next?: IContext | null;
  forward: () => void;
  then: (fn: (...args: Arguments) => unknown, ...args: Arguments) => IContext;
}

export const chain: TChain = (prevChain = null) => {
  const ctx: IContext = () => {
    if (prevChain && ctx.prevChain !== null && 'next' in ctx.prevChain) {
      ctx.prevChain.next = prevChain;
      ctx.prevChain();
    } else {
      ctx.forward();
    }
  };

  ctx.args = null;
  ctx.fn = null;
  ctx.prevChain = prevChain;

  ctx.then = (fn, ...args) => {
    ctx.fn = fn;
    ctx.args = args;
    return chain(ctx);
  };
  ctx.forward = () => {
    if (ctx.fn) {
      ctx.fn(ctx.args, () => {
        if (ctx.next) {
          ctx.next.forward();
        }
      });
    }
  };

  return ctx;
};
