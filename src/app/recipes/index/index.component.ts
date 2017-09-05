import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "app/recipe";
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'rb-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  get recipeList(): Recipe[] {
    var tempRecipes: Recipe[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      if ((localStorage.key(i).toString().match(/(rb-)/)) && (localStorage.key(i).toString() != "rb-null")) {
        tempRecipes.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return tempRecipes;
  }
}

