import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailRecipeService, CocktailRecipe } from 'src/app/_services';

@Component({
  selector: 'app-search-cocktail-recipes',
  templateUrl: './search-cocktail-recipes.component.html',
  styleUrls: ['./search-cocktail-recipes.component.css']
})
export class SearchCocktailRecipesComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cocktailRecipeService: CocktailRecipeService
  ) { }

    searchCocktailRecipeForm!: FormGroup;
    ingredients? : string 
    loading = false;
    submitted = false;
    returnUrl?: string;
    error!: string

  ngOnInit(): void {
    this.searchCocktailRecipeForm = this.formBuilder.group({
      ingredients: ['', Validators.required]
    })
  }
  
  get f() { return this.searchCocktailRecipeForm?.controls}

  onSubmit(): void {
    this.submitted = true;

    if(this.searchCocktailRecipeForm.invalid) {
      return ;
    }
    this.loading = true;
    this.ingredients = this.f?.ingredients.value;
    this.cocktailRecipeService.searchCocktailsByIngredients(this.ingredients || "");
  }

}
