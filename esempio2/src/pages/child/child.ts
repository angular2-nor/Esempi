import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
 Generated class for the Child page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-child',
  templateUrl: 'child.html'
})
export class ChildPage {

  private _name = '';

  @Input()
  set nameFunc(name:string) {
    this._name = (name!='Lord Voldemort' && name.trim()) || 'Colui-Che-Non-Deve-Essere-Nominato';
  }

  get nameFunc():string {
    return this._name;
  }
}
