import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Services

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './app/components/shared/navbar/navbar.component';
import { HomeComponent } from './app/components/home/home.component';
import { StudiesComponent } from './app/components/studies/studies.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { PortfolioComponent } from './app/components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudiesComponent,
    ExperienceComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
