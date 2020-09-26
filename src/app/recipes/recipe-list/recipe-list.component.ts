import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [  new Recipe('A Test recipe','This is simply a Test','https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg')];

  constructor() { }

  ngOnInit(): void {
  }

}
