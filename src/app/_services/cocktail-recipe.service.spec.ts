import { TestBed } from '@angular/core/testing';

import { CocktailRecipeService } from './cocktail-recipe.service';

describe('CocktailRecipeService', () => {
  let service: CocktailRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
