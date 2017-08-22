import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipe";

@Component({
  selector: 'rb-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  selectedRecipe: Recipe;

  @Input() set recipe(value: Recipe){
    if (value) {this.selectedRecipe = value}
  }

  constructor() { }

  ngOnInit() {
  }

}
