import { NgModule } from '@angular/core';
import { AuthGuard } from './auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; 
import { SignupComponent } from './pages/signup/signup.component'; 
import { HomeComponent } from './pages/home/home.component'; 

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: '', loadChildren: () => import('./app.routes.ts').then(m => m.MainModule), canActivate: [AuthGuard] },
  //{path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
