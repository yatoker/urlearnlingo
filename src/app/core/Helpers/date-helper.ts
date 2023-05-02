
export function addDays(date: Date, days) {
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString();
}

export function substractDays(date: Date, days) {
  date.setDate(date.getDate() - days);
  return date.toLocaleDateString();
}

export function currentDate() {
  return new Date();
}
