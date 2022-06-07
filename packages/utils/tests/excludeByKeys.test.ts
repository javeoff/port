import { excludeByKeys } from '../src/object/excludeByKeys';

describe('excludeByKeys', () => {
  test('should return list with excluded keys', () => {
    const list = [
      {
        title: 'title',
        description: 'description',
      },
      {
        title: 'title 1',
        description: 'description 1',
      },
    ];

    const result = excludeByKeys(list, ['title']);

    expect(result).toBeDefined();
    expect(result).toStrictEqual([
      { description: 'description' },
      { description: 'description 1' },
    ]);
  });
});
