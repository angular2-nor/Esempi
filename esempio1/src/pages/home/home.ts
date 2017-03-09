import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { HEROES } from '../../mocks/mock-heroes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  heroes = HEROES;
  parentFirstHero = HEROES[0]
  master: string = 'Master';

  constructor(public navCtrl:NavController) {
    console.log(this.parentFirstHero);

  }

}
