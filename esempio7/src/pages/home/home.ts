import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MissionService} from '../../providers/mission-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MissionService]

})
export class HomePage {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history:string[] = [];
  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas!'];
  nextMission = 0;

  constructor(public navCtrl:NavController, private missionService:MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    console.log('-------------announce')
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
