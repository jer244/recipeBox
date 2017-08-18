import { Component, OnInit } from '@angular/core';
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
