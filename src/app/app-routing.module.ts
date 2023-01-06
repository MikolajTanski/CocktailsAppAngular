import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCocktailRecipeComponent } from './cocktail-recipes/add-cocktail-recipe/add-cocktail-recipe.component';
import { CocktailRecipesComponent } from './cocktail-recipes/cocktail-recipes.component';
import { SearchCocktailRecipesComponent } from './cocktail-recipes/search-cocktail-recipes/search-cocktail-recipes.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cocktailRecipes', component: CocktailRecipesComponent },
  { path: 'cocktailRecipes/add', component: AddCocktailRecipeComponent },
  { path: 'cocktailRecipes/search', component: SearchCocktailRecipesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
