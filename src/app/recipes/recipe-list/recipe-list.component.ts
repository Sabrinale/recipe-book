import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe( 'test Recipe', 'this is a test ',
     'https://i.ndtvimg.com/i/2017-10/chicken-chettinad_620x330_41507621839.jpg'),
     new Recipe( 'test Recipe', 'this is a test ',
     'https://i.ndtvimg.com/i/2017-10/chicken-chettinad_620x330_41507621839.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
