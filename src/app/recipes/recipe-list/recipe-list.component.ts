import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[]=[
    new Recipe('A Test Recipe','This is a test recipe', "https://images.pexels.com/photos/46170/kitchen-scale-weighing-baking-cooking-46170.jpeg?h=350&auto=compress&cs=tinysrgb")
    ,new Recipe('A Test Recipe','This is a test recipe', "https://images.pexels.com/photos/46170/kitchen-scale-weighing-baking-cooking-46170.jpeg?h=350&auto=compress&cs=tinysrgb")
    ,new Recipe('A Test Recipe','This is a test recipe', "https://images.pexels.com/photos/46170/kitchen-scale-weighing-baking-cooking-46170.jpeg?h=350&auto=compress&cs=tinysrgb")

  ];
  constructor() { }

  ngOnInit() {
  }
 recipeSelected(recipe: Recipe){

  this.recipeWasSelected.emit(recipe);
 }
}
