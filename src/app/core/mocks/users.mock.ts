import { currentDate, substractDays } from "../Helpers/date-helper";
import { User } from "../models";

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'Eray',
    surname: 'Ahmet',
    age: 24,
    email: 'eray@ahmet.com',
    createdAt: substractDays(currentDate(), 10)
  },
  {
    id: 2,
    name: 'John',
    surname: 'Smith',
    age: 50,
    email: 'john@smith.com',
    createdAt: substractDays(currentDate(), 15)
  },
  {
    id: 3,
    name: 'Sam',
    surname: 'Jackson',
    age: 35,
    email: 'john@smith.com',
    createdAt: substractDays(currentDate(), 20)

  }
]
