import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Orange', 4),
];

getIngredient(){
    return this.ingredients.slice();
}

addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
    // console.log("Service Emit!!");
}

addIngredients(ingredients: Ingredient[]){
    // for (let ingredient of ingredients){
    //     this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);//To push multiple  element into object array
    this.ingredientsChanged.emit(this.ingredients.slice());
}
}
