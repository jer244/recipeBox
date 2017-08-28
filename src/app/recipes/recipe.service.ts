import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "app/ingredient";
import { Recipe } from "app/recipe";

@Injectable()
export class RecipeService {

  constructor() { }

  pushRecipe = new EventEmitter();

  pushSelectedRecipe(recipe: Recipe) {
    this.pushRecipe.emit(recipe);
  }

  getSelectedRecipe(title: String) {
    return JSON.parse(localStorage.getItem('rb-'+ title));
  }

}
