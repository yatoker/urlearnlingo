import { InjectionToken } from "@angular/core";
import { ApplicationSettings, Category, Entry, User } from "../models";

export interface DataService {
  /**
   * Get All categories
   */
  getCategories(): Category[];

  /**
   * Get All category with the given ID
   */
  getCategoryById(id: number): Category | undefined;

  /**
   * Get All entries
   */
  getEntries(): Entry[];

  /**
   * Get All entries of the given category
   */
  getEntriesByCategory(categoryId: number): Entry[] | undefined;

  /**
   * Get entry with the given ID
   */
  getEntryById(id: number): Entry | undefined;

  /**
   * Get all users
   */
  getUsers(): User[];

  /**
   * Get user with the given ID
   */
  getUserById(id : number): User | undefined;

  /**
   * Get excluded list of entries
   */
  getUserExcludedEntries(userId: number): Entry[] | undefined;

  /**
   * Get excluded list of categories
   */
  getUserExcludedCategories(userId: number): Category[] | undefined;

  /**
   * Get all application settings
   */
  getApplicationSettings(): ApplicationSettings;
}

/**
 * Data Service Token used to handle data operations
 */
export const DATA_SERVICE_TOKEN = new InjectionToken<string>('DataServiceToken');
