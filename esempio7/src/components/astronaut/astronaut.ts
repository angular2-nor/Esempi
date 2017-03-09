import {Component, Input, OnDestroy} from '@angular/core';
import {MissionService} from '../../providers/mission-service';
import {Subscription}   from 'rxjs/Subscription';


@Component({
  selector: 'my-astronaut',
  templateUrl: 'astronaut.html'
})
export class AstronautComponent implements OnDestroy {

  @Input() astronaut:string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription:Subscription;

  constructor(private missionService:MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      });
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
