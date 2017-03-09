import {Component, Input, OnChanges, SimpleChange} from '@angular/core';

/*
 Generated class for the Child component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
  selector: 'version-child',
  templateUrl: 'child.html'
})
export class ChildComponent implements OnChanges {

  @Input() major:number;
  @Input() minor:number;
  @Input() other:number;
  changeLog:string[] = [];

  ngOnChanges(changes:{[propKey:string]:SimpleChange}) {
    console.log('------------ngOnChanges------------');
    console.log(changes);


    let log:string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

}
