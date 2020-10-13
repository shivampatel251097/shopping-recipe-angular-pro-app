import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
          'Samosa recipe',
           'A crunchy combination of potato masala and Papdi, fried in oil.',
          'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg',
          [
            new Ingredient('Potato', 10),
            new Ingredient('Flour', 1)]),
    new Recipe(
      'Dosa recipe',
      'A south Indian dish. we eat with Sambhar and Coconut chatni',
       'https://spiderimg.amarujala.com/assets/images/2019/07/01/750x506/dosa_1561969359.jpeg',
       [
        new Ingredient('Potato', 5),
        new Ingredient('Rice', 1)
       ])
  ];
  getRecipes(){
      return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes.slice()[id];
  }

  constructor(private shoppingListService: ShoppingListService){}

  addIngredientsToShoppingList(ingredient: Ingredient[]){
    this.shoppingListService.addIngredients(ingredient);
  }

}