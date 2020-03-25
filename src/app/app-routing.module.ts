import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FitnessComponent } from './fitness/fitness.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HealthComponent } from './health/health.component';
import { WellnessComponent } from './wellness/wellness.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'fitness', component: FitnessComponent },
  { path: 'nutrition', component: NutritionComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'health', component: HealthComponent },
  { path: 'wellness', component: WellnessComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
