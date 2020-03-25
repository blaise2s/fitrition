import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {
  HeaderModule,
  ButtonModule,
  InputModule
} from 'neutron-components-angular';
import { FitnessComponent } from './fitness/fitness.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HealthComponent } from './health/health.component';
import { WellnessComponent } from './wellness/wellness.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FitnessComponent,
    NutritionComponent,
    RecipesComponent,
    HealthComponent,
    WellnessComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ButtonModule,
    InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
