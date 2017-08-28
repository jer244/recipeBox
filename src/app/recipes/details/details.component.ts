import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipe";
import { RecipeService } from "app/recipes/recipe.service";
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'rb-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  selectedRecipe: Recipe;
  id: number = 1;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
      //(param: any) => this.selectedRecipe = this.recipeService
    )
  }
}