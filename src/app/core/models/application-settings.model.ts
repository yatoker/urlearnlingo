export interface ApplicationSettings {
  id?: number,
  selectedTheme: Theme,
  notificationIntervalInMs: number,
  notificationCategoryId: number
}

export const enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}
