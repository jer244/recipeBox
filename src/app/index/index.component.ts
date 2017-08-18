import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/ingredient";
import { Recipe } from "app/recipe";

@Component({
  selector: 'rb-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  myRecipes: Recipe[] = [];
  
  constructor() { }

  ngOnInit() {
    this.myRecipes = this.recipeSeed;
  }

  recipeSeed: Recipe[] = [
    new Recipe(
      "Spaghetti and Meatballs", 
        [
          new Ingredient("Spaghetti", 1, "pound"), 
          new Ingredient("Sauce", 1, "L"),
          new Ingredient("meatball", 3, "balls")
        ],
        4,
        "http://www.smithfieldfoods.com/images/home/packaged-brands/armour-food.jpg"
        ),
    new Recipe(
      "Chicken Wings", 
        [
          new Ingredient("Chicken Wings", 12, "wings"), 
          new Ingredient("Hot Sauce", 6, "oz")
        ],
        2,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_D8PWoKgB0u1eQrsbZ_cVIQQT2IOKNvI9sRopWD2MiSMEbBAi"
        ),
    new Recipe(
      "Turkey Sandwich", 
        [
          new Ingredient("Bread", 2, "slice"),
          new Ingredient("Turkey", 3, "slice"), 
          new Ingredient("Lettuce", 1, "leave"),
          new Ingredient("Tomato", 2, "slice"),
          new Ingredient("Mayo", 2, "oz")
        ],
        1,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALUV8gnFxhKN36nT8iO_xIaGWhyi5OgmgQQTuFdspYKtfh9i9cA"
        )
  ]


}
