import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../../db/db.service';
import { CommonModule } from '@angular/common';
import { TaskViewComponent } from '../../components/taskview/taskview.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TaskViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  username: any = '';

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
    //this.getName();
  }

  onLogout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }

  async getName(): Promise<void> {
    const user = await this.dbService.getUsername();
    if (user) {
      this.username = user;
    }
  }
}
