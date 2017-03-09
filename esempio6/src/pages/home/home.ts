import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ChildComponent} from '../../components/child/child';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements AfterViewInit {

  @ViewChild(ChildComponent)
  private timerComponent:ChildComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    console.log('--------------ngAfterViewInit')
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() {
    console.log('--------------start')
    this.timerComponent.start();
  }

  stop() {
    console.log('--------------stop')
    this.timerComponent.stop();
  }

  constructor(public navCtrl:NavController) {
    console.log('--------------HomePage constructor')
  }

}
