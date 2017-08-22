import { Component, OnInit } from '@angular/core';
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipe";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  myRecipes: Recipe[] = [];
  selectedRecipe: Recipe = null;

  selectRecipe(recipe: Recipe){
    this.selectedRecipe = recipe;
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
      this.myRecipes = this.recipeService.recipeSeed;
  }

}
