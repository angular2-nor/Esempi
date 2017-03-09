import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {TodoService} from '../../providers/todo-service';
import {TodoItem} from '../../providers/todo-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TodoService]
})
export class HomePage {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  private addedItem:TodoItem;

  onVoted(agreed:boolean) {
    console.log('onVoted');
    agreed ? this.agreed++ : this.disagreed++;
  }

  private onItemAdded(item:TodoItem):void {
    // do something with added item
    console.log('------------onItemAdded');

    this.addedItem = item;
  }

  public myEvent():void {
    // do something with added item
    let item = new TodoItem('uno', true)
    this.todoService.add(item);
  }

  constructor(public navCtrl:NavController, public todoService:TodoService) {
    todoService.itemAdded$.subscribe(item => this.onItemAdded(item));
  }

}
