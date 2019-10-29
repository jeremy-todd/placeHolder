import { Component } from '@angular/core';
import { PlaceHolderService } from './services/place-holder.service';
import { ITodo } from './interfaces/itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'placeHolder';
  todos: ITodo[];
  constructor(PlaceHolderService: PlaceHolderService) {
    PlaceHolderService.getList().subscribe(data => this.todos = data);
  }
}
