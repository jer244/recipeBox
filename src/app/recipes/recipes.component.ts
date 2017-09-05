import { Component, OnInit } from '@angular/core';
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipe";
import { RecipeSeederService } from "app/recipes/recipe-seeder.service";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe = null;

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  constructor(private recipeService: RecipeService, private seeder: RecipeSeederService) {}

  ngOnInit() {
    this.seeder.seedLocalStorage();
  }

}

