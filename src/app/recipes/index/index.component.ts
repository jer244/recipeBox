import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from "app/ingredient";
import { Recipe } from "app/recipe";
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'rb-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  get recipeList(): Recipe[] {
    var tempRecipes: Recipe[] =[];
    for(let i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).toString().match(/(rb-)/)){
        tempRecipes.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return tempRecipes;
  }
}
