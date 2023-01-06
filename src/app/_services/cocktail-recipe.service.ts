import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';



export interface CocktailRecipe {
  id?: number,
  name: string,
  recipe: string,
  userEmail?: string,
  ingredients: string // later will be changed to ingredients objects array
}

@Injectable({
  providedIn: 'root'
})
export class CocktailRecipeService {

  constructor(
    private httpClient: HttpClient,
    ) { }
    
    getCocktailRecipes() {
      return this.httpClient.get<any>(`https://localhost:44308/api/cocktailRecipes`);
    }

    addCocktailRecipe(cocktailRecipe : CocktailRecipe) {
      let user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      cocktailRecipe.userEmail = user.email;
      console.log(cocktailRecipe);
      return this.httpClient.post<any>('https://localhost:44308/api/cocktailRecipes', cocktailRecipe);
    }

    searchCocktailsByIngredients(ingredients : string) {
      return this.httpClient.post<any>('https://localhost:44308/api/cocktailRecipes', { ingredients} );
    }

}



