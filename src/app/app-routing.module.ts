import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const accountModule = () =>
  import('./account/account.module').then((x) => x.AccountModule);

const routes: Routes = [{ path: '', loadChildren: accountModule }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
