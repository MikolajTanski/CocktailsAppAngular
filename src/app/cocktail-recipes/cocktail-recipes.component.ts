import { Component, OnInit } from '@angular/core';
import { CocktailRecipeService } from '../_services';
import { CocktailRecipe } from '../_services/cocktail-recipe.service';

@Component({
  selector: 'app-cocktail-recipes',
  templateUrl: './cocktail-recipes.component.html',
  styleUrls: ['./cocktail-recipes.component.css'],
  providers: [CocktailRecipeService]
})
export class CocktailRecipesComponent implements OnInit {

  constructor(
    private cocktailRecipeService : CocktailRecipeService
  ) { }

  cocktailRecipes: CocktailRecipe[] | undefined;

  ngOnInit(): void {
    this.cocktailRecipeService.getCocktailRecipes().subscribe( 
      response => {
        console.log(response);
        this.cocktailRecipes = response;
      }, error => {
        console.log(error);
      });
  }

}
