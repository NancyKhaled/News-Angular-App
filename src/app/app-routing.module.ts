import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ViewNewsComponent } from './views/view-news/view-news.component';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { EditNewsComponent } from './views/edit-news/edit-news.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'addNews',
    component: AddNewsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'viewNews',
    component: ViewNewsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'editNews/:id',
    component: EditNewsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'editProfile',
    component: EditProfileComponent,
    canActivate: [AuthGuardService]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
