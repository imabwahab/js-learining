// Write a function removeDuplicates<T> (arr: T[]) : T[] that removes duplicate items.

function removeDuplicates<T>(arr: T[]): T[] {

  return [... new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
// Output: [1, 2, 3, 4]

console.log(removeDuplicates(['a', 'b', 'a', 'c']));
// Output: ['a', 'b', 'c']
