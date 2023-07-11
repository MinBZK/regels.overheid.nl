/**
 * Removes an element from an array without mutating the original array.
 */
export function arrayWithout<T extends any[]>(array: T, element: T[number]): T {
  const index = array.indexOf(element);

  if (index > -1) {
    const newArray = array.slice(0) as T;
    newArray.splice(index, 1);
    return newArray;
  }

  return array;
}
