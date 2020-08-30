import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { StudiesComponent } from './app/components/studies/studies.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { PortfolioComponent } from './app/components/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'studies', component: StudiesComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
