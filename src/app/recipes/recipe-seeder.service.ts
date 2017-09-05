import { Injectable } from '@angular/core';
import { Recipe } from "app/recipe";

@Injectable()
export class RecipeSeederService {

  constructor() {}

  seedLocalStorage() {
    if (!localStorage.getItem("rb-null")) {
      this.recipeSeeder.forEach(
        (recipe) => localStorage.setItem("rb-" + recipe.title, JSON.stringify(recipe))
      )
    }
  }

  //******** array of recipes to initially seed app*******************//
  recipeSeeder: Recipe[] = [
    new Recipe(
      null,
      null,
      null,
      null
    ),
    new Recipe(
      "Spaghetti and Meatballs",
      "1 lb Spaghetti\n1 pt Sauce\nmeatballs\n",
      "cook pasta, add sauce and meatballs",
      "http://www.smithfieldfoods.com/images/home/packaged-brands/armour-food.jpg"
    ),
    new Recipe(
      "Chicken Wings",
      "12 Chicken wings\n4 oz hot sauce\n",
      "Fully cook wings and toss in hot sauce",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_D8PWoKgB0u1eQrsbZ_cVIQQT2IOKNvI9sRopWD2MiSMEbBAi"
    ),
    new Recipe(
      "Turkey Sandwich",
      "2 slices of bread\n3 slices of turkey breast\n2 pieces lettuce\n2 slices of tomato\nmayo",
      "spread mayo on bread and assemble sandwich",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALUV8gnFxhKN36nT8iO_xIaGWhyi5OgmgQQTuFdspYKtfh9i9cA"
    ),
    new Recipe(
      "Hot Fudge Sundae",
      "3 scoops ice cream\n2 oz hot fudge\n2 oz whip cream\n1 cherry",
      "combine ingredients and enjoy",
      "https://i0.wp.com/theheritagecook.com/wp-content/uploads/2010/08/Hot-Fudge-Sundae-in-Blue-Glass-iStock.jpg"
    )
  ]

}

