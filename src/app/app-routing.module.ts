import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // Public routes
  {path: 'home', component: HomeComponent},

  // Default route
  {path: '**', pathMatch: 'full', redirectTo: 'home'} // Default route: Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
