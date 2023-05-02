import '@nativescript/firebase-firestore';
import { DataService } from './data.service';
import { Category, Entry, User, ApplicationSettings } from '../models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
 })
export class FirestoreService implements DataService {

  getCategories(): Category[] {
    throw new Error('Method not implemented.');
  }
  getCategoryById(id: number): Category {
    throw new Error('Method not implemented.');
  }
  getEntries(): Entry[] {
    throw new Error('Method not implemented.');
  }
  getEntriesByCategory(categoryId: number): Entry[] {
    throw new Error('Method not implemented.');
  }
  getEntryById(id: number): Entry {
    throw new Error('Method not implemented.');
  }
  getUsers(): User[] {
    throw new Error('Method not implemented.');
  }
  getUserById(id: number): User {
    throw new Error('Method not implemented.');
  }
  getUserExcludedEntries(userId: number): Entry[] {
    throw new Error('Method not implemented.');
  }
  getUserExcludedCategories(userId: number): Category[] {
    throw new Error('Method not implemented.');
  }
  getApplicationSettings(): ApplicationSettings {
    throw new Error('Method not implemented.');
  }

}
