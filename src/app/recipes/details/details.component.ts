import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipe";
import { RecipeService } from "app/recipes/recipe.service";
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'rb-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: any) => this.selectedRecipe = this.recipeService.getSelectedRecipe(param['id'])
    )
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
  }
}
