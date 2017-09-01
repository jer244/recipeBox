import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipe";

@Component({
  selector: 'rb-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }
  changedRecipe: Recipe;
  originalRecipe: Recipe;
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: any) => {
        this.originalRecipe = this.recipeService.getSelectedRecipe(param['id']);
        this.changedRecipe= Object.assign({}, this.originalRecipe);
      }
    )
  }

  onSubmit() {
    this.recipeService.editExisting(this.originalRecipe, this.changedRecipe);
  }

}
