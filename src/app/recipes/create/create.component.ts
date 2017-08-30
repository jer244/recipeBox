import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipe";

@Component({
  selector: 'rb-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  recipe: Recipe = new Recipe (null, null, null, null, null);

  onSubmitNew() {
    this.recipeService.addNew(this.recipe);
  }
}
