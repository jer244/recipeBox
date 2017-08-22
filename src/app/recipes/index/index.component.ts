import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from "app/ingredient";
import { Recipe } from "app/recipe";

@Component({
  selector: 'rb-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @Input() recipes: Recipe[];
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }



}
