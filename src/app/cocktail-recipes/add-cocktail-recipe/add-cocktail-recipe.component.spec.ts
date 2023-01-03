import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCocktailRecipeComponent } from './add-cocktail-recipe.component';

describe('AddCocktailRecipeComponent', () => {
  let component: AddCocktailRecipeComponent;
  let fixture: ComponentFixture<AddCocktailRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCocktailRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCocktailRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
