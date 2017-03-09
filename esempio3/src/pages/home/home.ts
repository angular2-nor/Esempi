import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  major:number = 1;
  minor:number = 23;
  other:number = 12;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

  constructor(public navCtrl:NavController) {

  }

}
