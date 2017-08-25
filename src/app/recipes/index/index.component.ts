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

  @Input() recipes: Recipe[];
  @Output() selected = new EventEmitter();

  selectedFromIndex(recipe: Recipe) {
    this.recipeService.pushSelectedRecipe(recipe);
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
