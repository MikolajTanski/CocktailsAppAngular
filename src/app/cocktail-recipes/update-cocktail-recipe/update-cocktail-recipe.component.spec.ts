import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCocktailRecipeComponent } from './update-cocktail-recipe.component';

describe('UpdateCocktailRecipeComponent', () => {
  let component: UpdateCocktailRecipeComponent;
  let fixture: ComponentFixture<UpdateCocktailRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCocktailRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCocktailRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
