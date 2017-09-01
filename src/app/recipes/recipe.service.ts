import { Injectable, EventEmitter } from '@angular/core';
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

  editExisting(old: Recipe, edited: Recipe) {
    localStorage.removeItem('rb-' + old.title);
    localStorage.setItem('rb-' + edited.title, JSON.stringify(edited));
  }
}