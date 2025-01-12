import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { DatabaseService } from '../../db/db.service';
import { FormsModule } from '@angular/forms';

export interface TaskItemDate {
  isoString: string | null;
  formatted: string | null;
}

export interface TaskItem {
  id?: string | null | undefined;
  title: string | null;
  description: string | null;
  priority: string | null;
  status: string | null;
  dueDateTime: TaskItemDate;
  createdDate: TaskItemDate;
  category: string | null;
  comments: string | null;
}

@Component({
  selector: 'app-tasks-view',
  imports: [CommonModule, FormsModule],
  templateUrl: './taskview.component.html',
  styleUrl: './taskview.component.css',
})
export class TaskViewComponent implements OnInit {
  title: string | null = null;
  description: string | null = null;
  dueDateTime: string | null = null;
  selectedPriority: string | null = '';
  selectedStatus: string | null = '';
  selectedCategory: string | null = '';
  comments: string | null = null;

  todos: TaskItem[] = [];
  priorities: string[] = ['Low', 'Medium', 'High'];
  statuses: string[] = ['Pending', 'In Progress'];
  categories: string[] = ['Work', 'Personal'];

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
    if (this.title) {
      let todo: TaskItem = {
        title: this.title,
        description: this.description,
        priority: this.selectedPriority,
        status: this.selectedStatus,
        dueDateTime: {
          isoString: this.dueDateTime,
          formatted: this.dueDateTime
            ? this.formatDateTime(this.dueDateTime)
            : null,
        },
        createdDate: {
          isoString: new Date().toISOString().slice(0, 16),
          formatted: this.formatDateTime(),
        },
        category: this.selectedCategory,
        comments: this.comments,
      };
      this.addTask(todo);
      this.todos.push(todo);
      this.clearData();
    }
  }

  async getTask(): Promise<void> {
    const snapshot = await this.dbService.getTasks();

    if (snapshot) {
      this.todos = Object.keys(snapshot).map((key) => ({
        id: key, //use key as the id
        ...snapshot[key], //spread the rest of the todo object properties
      }));
    } else {
      //noticed when there's no tasks the snapshot is null or undefined
      console.error('Snapshot is null or undefined');
      this.todos = [];
    }
  }

  //fetch task data
  addTask(todo: Object): void {
    this.dbService.addTask(todo);
  }

  deleteTask(id: any): void {
    this.todos = this.todos.filter((obj) => obj.id !== id);
    this.dbService.deleteTask(id);
  }

  isTaskComplete(id: any): void {
    //find the index of the object with the matching id
    const index = this.todos.findIndex((obj) => obj.id === id);

    //if the object is found, update its (completed) property inside the array
    if (index !== -1) {
      this.todos[index].status = 'Completed';
      this.dbService.createOrUpdateData(id, 'Completed');
    }
  }

  formatDateTime(date: any = null): string {
    if (date == null) {
      date = new Date();
    } else {
      date = new Date(date);
    }
    const datePart = new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date);
    const timePart = date.toLocaleString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${datePart} at ${timePart}`;
  }

  clearData(): void {
    this.title = null;
    this.comments = null;
    this.description = null;
    this.dueDateTime = '';
    this.selectedStatus = '';
    this.selectedPriority = '';
    this.selectedCategory = '';
  }
}
