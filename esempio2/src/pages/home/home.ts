import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Displays 'Mr. IQ', '<no name set>', 'Bombasto'
  names = ['Harry Potter', 'Lord Voldemort', 'Severus Piton','Albus Silente'];

  constructor(public navCtrl:NavController) {

  }

}
