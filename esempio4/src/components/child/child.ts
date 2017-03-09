import {Component, EventEmitter, Input, Output} from '@angular/core';

/*
 Generated class for the Child component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
  selector: 'child',
  templateUrl: 'child.html'
})
export class ChildComponent {

  @Input() name:string;
  @Output() onVotedChild = new EventEmitter<boolean>();
  @Output() myOnVotedChild = new EventEmitter<boolean>();

  voted = false;

  vote(agreed:boolean) {
    console.log('onVotedChild.emit');
    this.onVotedChild.emit(agreed);
    this.voted = true;
  }
  
}
