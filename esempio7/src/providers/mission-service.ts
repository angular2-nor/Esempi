import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

/*
 Generated class for the MissionService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class MissionService {

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();
  // Service message commands
  announceMission(mission:string) {
    console.log('-------------announceMission')
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut:string) {
    this.missionConfirmedSource.next(astronaut);
  }

  constructor(public http:Http) {
    console.log('Hello MissionService Provider');
  }

}
