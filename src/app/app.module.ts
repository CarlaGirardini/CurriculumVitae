import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

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
import { FooterComponent } from './app/components/shared/footer/footer.component';

// Language configuration
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es-AR';
import localeEn from '@angular/common/locales/en';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeEs, 'es-AR');
registerLocaleData(localeEn);
registerLocaleData(localeIt, 'it-IT');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudiesComponent,
    ExperienceComponent,
    PortfolioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR'
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
