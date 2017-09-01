import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipe";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'rb-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }
  recipe: Recipe;

  ngOnInit() {
    this.recipe= new Recipe(null, null, null, null, null)
  }

  onSubmit() {
    this.recipeService.addNew(this.recipe);
  }
}
