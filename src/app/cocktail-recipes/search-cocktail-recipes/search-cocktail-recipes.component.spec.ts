import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCocktailRecipeComponent } from './search-cocktail-recipes.component';

describe('SearchCocktailRecipeComponent', () => {
  let component: SearchCocktailRecipeComponent;
  let fixture: ComponentFixture<SearchCocktailRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCocktailRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCocktailRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
