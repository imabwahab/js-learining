// Create a function groupBy<T> (arr: T[], key: keyof T): Record<string,T[]> that groups objects by a specific key.

function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce((result: Record<string, T[]>, item: T) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}

type User = {
  id: number,
  name: string,
  department: string
}

const users: User[] = [
  { id: 1, name: 'Alice', department: 'HR' },
  { id: 2, name: 'Bob', department: 'IT' },
  { id: 3, name: 'Charlie', department: 'HR' }
];

const grouped = groupBy(users, 'department');
console.log(grouped);
