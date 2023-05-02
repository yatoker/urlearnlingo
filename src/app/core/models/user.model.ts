export interface User {
  id?: number,
  name: string,
  surname: string,
  age: number,
  email: string
  createdAt: string,
  excludedCategories?: Number[],
  excludedEntries?: Number[]
}
