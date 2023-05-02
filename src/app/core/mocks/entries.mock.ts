import { addDays, currentDate } from "../Helpers/date-helper";
import { Entry } from "../models";

export const mockEntries: Entry[] = [
  {
    id: 1,
    categoryId: 1,
    key: 'Silgi',
    value: 'Eraser',
    createdBy: 'Eray Ahmet',
    createdAt: addDays(currentDate(), 5)
  },
  {
    id: 2,
    categoryId: 1,
    key: 'Şişe',
    value: 'Bottle',
    createdBy: 'Eray Ahmet',
    createdAt: addDays(currentDate(), 5)
  },
  {
    id: 3,
    categoryId: 2,
    key: 'Dust',
    value: 'Toz',
    createdBy: 'Eray Ahmet',
    createdAt: addDays(currentDate(), 5)
  },
  {
    id: 4,
    categoryId: 2,
    key: 'Book',
    value: 'Kitap',
    createdBy: 'Eray Ahmet',
    createdAt: addDays(currentDate(), 5)
  },
  {
    id: 5,
    categoryId: 3,
    key: 'Wallet',
    value: 'Portefeuille',
    createdBy: 'Eray Ahmet',
    createdAt: addDays(currentDate(), 5)
  },
  {
    id: 5,
    categoryId: 3,
    key: 'Country',
    value: 'Pays',
    createdBy: 'Eray Ahmet',
    createdAt: addDays(currentDate(), 5)
  },
  {
    id: 6,
    categoryId: 5,
    key: 'Door',
    value: 'Puerta',
    createdBy: 'Eray Ahmet',
    createdAt: addDays(currentDate(), 5)
  },
  {
    id: 7,
    categoryId: 5,
    key: 'Bicycle',
    value: 'Bicicleta',
    createdBy: 'Eray Ahmet',
    createdAt: addDays(currentDate(), 5)
  },
]
