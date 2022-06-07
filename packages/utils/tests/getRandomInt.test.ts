import { getRandomInt } from '../src/getRandomInt';

describe('getRandomInt', () => {
  test('should return random integer', () => {
    const min = 0;
    const max = 1000;
    const result = getRandomInt(min, max);

    expect(result).toBeDefined();
    expect(result).not.toBe(-1);
    expect(result).not.toBe(1001);
  });
});
