import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CryptoComponent } from './crypto/crypto.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'crypto',
    loadChildren: () =>
      import('./crypto/crypto.module').then((m) => m.CryptoModule),
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
