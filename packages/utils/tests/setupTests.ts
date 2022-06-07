/* eslint-disable */
import 'jest-localstorage-mock';
import { isBrowser } from '../src/guards/isBrowser';

if (isBrowser) {
  (window as any).ResizeObserver = class ResizeObserver {
    observe() {}

    disconnect() {}
  };
}
/* eslint-enable */
