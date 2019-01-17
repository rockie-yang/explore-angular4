import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe', 'sample', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg'),
    new Recipe('Test Recipe', 'This is a test',
      'http://maxpixel.freegreatpicture.com/static/photo/2x/Egg-Ham-Breakfast-Green-Dinner-Fresh-Food-21707.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
