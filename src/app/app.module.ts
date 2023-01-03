import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { CocktailRecipesComponent } from './cocktail-recipes/cocktail-recipes.component';
import { CocktailRecipeDetailsComponent } from './cocktail-recipes/cocktail-recipe-details/cocktail-recipe-details.component';
import { AddCocktailRecipeComponent } from './add-cocktail-recipe/add-cocktail-recipe.component';
import { UpdateCocktailRecipeComponent } from './update-cocktail-recipe/update-cocktail-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CocktailRecipesComponent,
    CocktailRecipeDetailsComponent,
    AddCocktailRecipeComponent,
    UpdateCocktailRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
