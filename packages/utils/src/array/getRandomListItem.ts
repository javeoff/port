import { getRandomInt } from '../math/getRandomInt';

export const getRandomListItem = <Item>(items: Item[]): Item =>
  items.at(getRandomInt(0, items.length) - 1) as Item;
