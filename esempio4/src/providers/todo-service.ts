import {Injectable, EventEmitter} from '@angular/core';
import 'rxjs/add/operator/map';

/*
 Generated class for the TodoService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */

export class TodoItem {
  constructor(public name:string, public done:boolean) {
  }
}

@Injectable()
export class TodoService {

  public itemAdded$:EventEmitter<TodoItem>;
  private todoList:TodoItem[] = [];

  constructor() {
    this.itemAdded$ = new EventEmitter();
  }

  public list():TodoItem[] {
    return this.todoList;
  }

  public add(item:TodoItem):void {
    this.todoList.push(item);
    console.log('------------ before emit');
    this.itemAdded$.emit(item);
    console.log('------------ after emit');

  }

}
