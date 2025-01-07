import { Injectable } from '@angular/core';
import {
  Database,
  getDatabase,
  ref,
  set,
  get,
  push,
  remove,
} from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {

  private path: string = '';
  private db: Database;
  private user: User | null = null;
  private auth = getAuth();

  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    this.db = getDatabase(app);

    onAuthStateChanged(this.auth, (user: User | null) => {
      this.user = user;
      console.log('inside: ', user);
      if (user) {
        this.path = 'users/' + this.user?.uid + '/todos';
        console.log('path: ', this.path);
        console.log('user: ', this.user);
      }
    });
  }

  // Read data
  async getTasks() {
    const snapshot = await get(ref(this.db, this.path));
    return snapshot.exists() ? snapshot.val() : null;
  }

  // Add a new item to a list
  addTask(task: Object) {
    const newRef = push(ref(this.db, `${this.path}`));
    return set(newRef, task);
  }

  // Delete a record
  deleteTask(id: string) {
    console.log('Deleting task...');
    return remove(ref(this.db, `${this.path}/${id}`));
  }

  createOrUpdateData(id: string, data: any) {
    return set(ref(this.db, `${this.path}/${id}/completed`), data);
  }
}
