import {Component, Input} from '@angular/core';
import { HeroModel } from '../../models/hero-model';

/*
 Generated class for the HeroChild component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
  selector: 'hero-child',
  templateUrl: 'hero-child.html'
})
export class HeroChildComponent {

  text:string;
  @Input() hero: HeroModel;
  @Input() masterName: string;
  @Input('first') firstHero: string;

  constructor() {
    console.log('Hello HeroChild Component');
    this.text = 'Hello World';
  }

}
