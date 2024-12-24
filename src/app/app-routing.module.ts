import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './user/pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'boards',
    loadChildren: () =>
      import('./boards/boards.module').then((m) => m.BoardsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'boards',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
