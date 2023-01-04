import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { CocktailRecipe, CocktailRecipeService } from 'src/app/_services';

@Component({
  selector: 'app-add-cocktail-recipe',
  templateUrl: './add-cocktail-recipe.component.html',
  styleUrls: ['./add-cocktail-recipe.component.css']
})
export class AddCocktailRecipeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cocktailRecipeService: CocktailRecipeService
  ) { }

    addCocktailRecipeForm!: FormGroup;
    cocktailRecipe? : CocktailRecipe 
    loading = false;
    submitted = false;
    returnUrl?: string;
    error!: string

  ngOnInit(): void {
    this.addCocktailRecipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      ingredients: ['', Validators.required],
      recipe: ['', Validators.required],
  });
  }
  get f() { return this.addCocktailRecipeForm?.controls; }
  
  onSubmit(): void {
    this.submitted = true;

    if(this.addCocktailRecipeForm.invalid) {
      return ;
    }
    this.loading = true;
    this.cocktailRecipe = {
      name: this.f?.name.value,
      recipe: this.f?.recipe.value,
      ingredients: this.f?.ingredients.value
    }

    this.cocktailRecipeService.addCocktailRecipe(this.cocktailRecipe)
    .pipe(first())
    .subscribe(data => {
      alert('successully added');
    }, error => {
        this.error = error.error;
        console.log(error);
        this.loading = false;
    });
  }

}
