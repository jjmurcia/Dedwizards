import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VoidComponent } from './components/void/void.component';
import { SingUpComponent } from './components/sing-up/sing-up.component'
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"sing-up", component: SingUpComponent},
  {path:"home", component: HomeComponent, canActivate: [AuthGuard]},
  {path:"dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path:"**",component:VoidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
