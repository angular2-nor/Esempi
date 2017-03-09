import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the LoggerService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class LoggerService {

  constructor(public http:Http) {
    console.log('Hello LoggerService Provider');
  }

  logs:string[] = [];
  prevMsg = '';
  prevMsgCount = 1;

  log(msg:string) {
    if (msg === this.prevMsg) {
      // Repeat message; update last log entry with count.
      this.logs[this.logs.length - 1] = msg + ` (${this.prevMsgCount += 1}x)`;
    } else {
      // New message; log it.
      this.prevMsg = msg;
      this.prevMsgCount = 1;
      this.logs.push(msg);
    }
  }

  clear() {
    this.logs.length = 0;
  }

  // schedules a view refresh to ensure display catches up
  tick() {
    this.tick_then(() => {
    });
  }

  tick_then(fn:() => any) {
    console.log('------------LoggerService->tick_then')
    console.log(fn)
    
    setTimeout(fn, 0);
  }

}
