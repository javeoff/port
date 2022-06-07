export const excludeByKeys = <
  Item extends Record<string, unknown>,
  Key extends keyof Item,
  ListItem extends { [key in Key]: Item[Key] },
>(
  array: Item[],
  keys: Key[],
): Array<ListItem> =>
  array.map(
    (item) =>
      Object.fromEntries(
        Object.entries(item).filter(
          ([key]) => !keys.some((item) => item === key),
        ),
      ) as ListItem,
  );
