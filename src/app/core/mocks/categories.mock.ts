import { addDays, substractDays, currentDate } from "../Helpers/date-helper";
import { Category } from "../models";

export const mockCategories: Category[] = [
  {
    id: 1,
    name: 'Turkish - English',
    description: 'Learn English language words as a native Turkish speaker',
    isActive: true,
    createdBy: 'Eray Ahmet',
    createdAt: addDays(currentDate(), 5)
  },
  {
    id: 2,
    name: 'English - Turkish',
    description: 'Learn Turkish language words as a native English speaker',
    isActive: true,
    createdBy: 'Eray Ahmet',
    createdAt: addDays(currentDate(), 15)
  },
  {
    id: 3,
    name: 'English - French',
    description: 'Learn French language words as a native English speaker',
    isActive: true,
    createdBy: 'Eray Ahmet',
    createdAt: substractDays(currentDate(), 5)
  },
  {
    id: 4,
    name: 'French - English',
    description: 'Learn English language words as a native French speaker',
    isActive: true,
    createdBy: 'Eray Ahmet',
    createdAt: substractDays(currentDate(), 25)
  },
  {
    id: 5,
    name: 'English - Spanish',
    description: 'Learn Spanish language words as a native English speaker',
    isActive: true,
    createdBy: 'Eray Ahmet',
    createdAt: substractDays(currentDate(), 15)
  },
  {
    id: 6,
    name: 'Spanish - English',
    description: 'Learn English language words as a native Spanish speaker',
    isActive: true,
    createdBy: 'Eray Ahmet',
    createdAt: substractDays(currentDate(), 20)
  }

]
