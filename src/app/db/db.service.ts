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
      if (user) {
        this.path = 'users/' + this.user?.uid + '/todos';
      }
    });
  }

  async getUsername(): Promise<any> {
    const snapshot = await get(ref(this.db, this.path.slice(0, -5) + 'name'));
    return snapshot.exists() ? snapshot.val() : null;
  }

  async getTasks() {
    const snapshot = await get(ref(this.db, this.path));
    return snapshot.exists() ? snapshot.val() : null;
  }

  addTask(task: Object) {
    const newRef = push(ref(this.db, `${this.path}`));
    return set(newRef, task);
  }

  deleteTask(id: string) {
    console.log('Deleting task...');
    return remove(ref(this.db, `${this.path}/${id}`));
  }

  //for now update only status...re check this....
  createOrUpdateData(id: string, data: string) {
    return set(ref(this.db, `${this.path}/${id}/status`), data);
  }
}
