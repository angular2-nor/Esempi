import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChildComponent } from '../components/child/child';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log('-------------HomePage constructor')
  }

}
