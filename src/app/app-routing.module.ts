import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { PublicationsComponent } from './components/publications/publications.component';

const routes: Routes = [
  // Public routes
  {path: 'home', component: HomeComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'publications', component: PublicationsComponent},
  {path: 'contact', component: ContactComponent},

  // Default route
  {path: '**', pathMatch: 'full', redirectTo: 'home'} // Default route: Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
