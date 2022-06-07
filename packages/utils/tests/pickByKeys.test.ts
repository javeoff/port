import { pickByKeys } from '../src/object/pickByKeys';

describe('pickByKeys', () => {
  test('should return random integer', () => {
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
    const result = pickByKeys(list, ['title']);

    expect(result).toBeDefined();
    expect(result).toStrictEqual([{ title: 'title' }, { title: 'title 1' }]);
  });
});
