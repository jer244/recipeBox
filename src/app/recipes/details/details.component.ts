import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipe";
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'rb-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.pushRecipe.subscribe(
      recipe=> this.selectedRecipe = recipe
    );
  }

}
