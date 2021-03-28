import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './navigator/signup/signup.component';
import { LoginComponent } from './navigator/login/login.component';
import { TrainingComponent } from './training/training.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'signUp', component:SignupComponent},
  {path:'logIn', component:LoginComponent},
  {path:'training', component:TrainingComponent, canActivate:[AuthGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
