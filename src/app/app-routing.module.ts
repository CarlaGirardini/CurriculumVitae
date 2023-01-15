import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // Public routes
  {path: 'home', component: HomeComponent},
  {path: 'experience', component: ExperienceComponent},

  // Default route
  {path: '**', pathMatch: 'full', redirectTo: 'home'} // Default route: Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
