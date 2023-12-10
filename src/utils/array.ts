export const normalize = <
  E extends {id: string | number | symbol},
  K extends E['id'],
>(
  array: E[],
) => {
  const ids: K[] = [];
  const entities: Record<K, E> = {} as Record<K, E>;
  array.forEach(item => {
    ids.push(item.id as K);
    entities[item.id as K] = item;
  });
  return {ids, entities};
};
