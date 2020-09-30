import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [  new Recipe('Samosa recipe', 'A crunchy combination of potato masala and Papdi, fried in oil.', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg'),
  new Recipe('Dosa recipe', 'A south Indian dish. we eat with Sambhar and Coconut chatni', 'https://spiderimg.amarujala.com/assets/images/2019/07/01/750x506/dosa_1561969359.jpeg')
];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
