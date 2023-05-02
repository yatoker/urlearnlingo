import { Injectable } from '@angular/core'
import { mockApplicationSettings, mockCategories, mockEntries, mockUsers } from "../mocks";
import { ApplicationSettings, Category, Entry, User } from "../models";
import { DataService } from "./data.service";

@Injectable({
  providedIn: 'root'
 })
export class MockDataService implements DataService {

  getCategories() {
    return mockCategories;
  }

  getCategoryById(id: number): Category | undefined {
    return mockCategories.find(c => c.id === id);
  }

  getEntries(): Entry[] {
    return mockEntries;
  }

  getEntriesByCategory(categoryId: number): Entry[] | undefined {
    return mockEntries.filter(e => e.categoryId === categoryId);
  }

  getEntryById(id: number): Entry | undefined {
    return mockEntries.find(e => e.id === id);
  }

  getUsers(): User[] {
    return mockUsers;
  }

  getUserById(id: number): User | undefined {
    return mockUsers.find(u => u.id === id);
  }

  getUserExcludedCategories(userId: number): Category[] |undefined {
     const excludedCategoryIdList = mockUsers.find(u => u.id === userId)?.excludedCategories;
     return mockCategories.filter(c => excludedCategoryIdList?.some(id => id === c.id));
  }

  getUserExcludedEntries(userId: number): Entry[] | undefined {
    const excludedEntryIdList = mockUsers.find(u => u.id === userId)?.excludedEntries;
     return mockEntries.filter(e => excludedEntryIdList?.some(id => id === e.id));
  }

  getApplicationSettings(): ApplicationSettings {
    return mockApplicationSettings;
  }

}

