import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { DatabaseService } from '../../db/db.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-view',
  imports: [CommonModule, FormsModule],
  templateUrl: './taskview.component.html',
  styleUrl: './taskview.component.css',
})
export class TaskViewComponent implements OnInit {
  taskName: string | null = null;
  taskDateTime: string | null = '';
  taskPriority: string = 'low';
  todos: any[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    public dbService: DatabaseService
  ) {}

  ngOnInit() {
    this.authService.checkAuthState().subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }
    });

    this.getTask();
  }

  add() {
    if (this.taskName) {
      let todo = {
        name: this.taskName,
        completed: false,
        priority: this.taskPriority,
        datetime: this.taskDateTime,
      };
      this.addTask(todo);
      this.todos.push(todo);
    }
  }

  async getTask(): Promise<void> {
    const snapshot = await this.dbService.getTasks();

    this.todos = Object.keys(snapshot).map((key) => ({
      id: key, //use key as the id
      ...snapshot[key], //spread the rest of the todo object properties
    }));
  }

  //fetch task data
  addTask(todo: Object): void {
    this.dbService.addTask(todo);
  }

  deleteTask(id: string): void {
    this.todos = this.todos.filter((obj) => obj.id !== id);
    this.dbService.deleteTask(id);
  }

  isTaskComplete(id: string, bool: boolean = true): void {
    //find the index of the object with the matching id
    const index = this.todos.findIndex((obj) => obj.id === id);

    //if the object is found, update its (completed) property inside the array
    if (index !== -1) {
      this.todos[index].completed = bool;
      this.dbService.createOrUpdateData(id, bool);
    }
  }
}
