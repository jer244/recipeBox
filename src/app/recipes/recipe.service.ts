import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "app/ingredient";
import { Recipe } from "app/recipe";

@Injectable()
export class RecipeService {

  constructor() { }

  getSelectedRecipe(title: String) {
    return JSON.parse(localStorage.getItem('rb-'+ title));
  }

  addNew(recipe: Recipe) {
    localStorage.setItem("rb-" + recipe.title, JSON.stringify(recipe));
  }

}
