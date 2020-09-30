import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [  new Recipe('A Test recipe','This is simply a Test','https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg'),
  new Recipe('A another Test recipe','This is simply a another Test','https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg')
];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
