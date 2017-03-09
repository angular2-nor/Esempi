import {
  Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, OnDestroy, AfterViewChecked
} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoggerService} from '../../providers/logger-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LoggerService]
})

export class HomePage implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  hasChild = false;
  hookLog:string[];

  heroName = 'Windstorm';
  private logger:LoggerService;


  // Respond after Angular checks the component's views and child views.
  // Called after the ngAfterViewInit and every subsequent ngAfterContentChecked.
  // A component-only hook.
  ngAfterViewChecked():void {
    console.log("--------ngAfterViewChecked");
  }

  // Cleanup just before Angular destroys the directive/component. Unsubscribe observables and detach event handlers to avoid memory leaks.
  // Called just before Angular destroys the directive/component.
  ngOnDestroy():void {
    console.log("--------ngOnDestroy");
  }

  // Respond after Angular initializes the component's views and child views.
  // Called once after the first ngAfterContentChecked.
  // A component-only hook.
  ngAfterViewInit():void {
    console.log("--------ngAfterViewInit");
  }

  // Respond after Angular checks the content projected into the component.
  // Called after the ngAfterContentInit and every subsequent NgDoCheck.
  // A component-only hook.
  ngAfterContentChecked():void {
    console.log("--------ngAfterContentChecked");
  }

  // Respond after Angular projects external content into the component's view.
  // Called once after the first NgDoCheck.
  // A component-only hook.
  ngAfterContentInit():void {
    console.log("--------ngAfterContentInit");
  }

  // Detect and act upon changes that Angular can't or won't detect on its own.
  // Called during every change detection run, immediately after ngOnChanges and ngOnInit.
  ngDoCheck():void {
    console.log("--------ngDoCheck");
  }

  //Respond when Angular (re)sets data-bound input properties.
  // The method receives a SimpleChanges object of current and previous property values.
  // Called before ngOnInit and whenever one or more data-bound input properties change.
  ngOnChanges(changes:SimpleChanges):void {
    console.log("--------ngOnChanges");
  }

  //Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.
  // Called once, after the first ngOnChanges.
  ngOnInit():void {
    console.log("--------ngOnInit");
  }


  constructor(public navCtrl:NavController, logger:LoggerService) {
    console.log("HomePage constructor");
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    console.log('------------HomePage->toggleChild')
    console.log(this.hasChild)
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear(); // clear log on create
    }
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }


  // Runs when the page has loaded. This event only happens once per page being created.
  // If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
  // The ionViewDidLoad event is good place to put your setup code for the page.
  ionViewDidLoad() {
    console.log("-----------------ionViewDidLoad");
  }

  //Runs when the page is about to enter and become the active page.
  ionViewWillEnter() {
    console.log("-----------------ionViewWillEnter");
  }

  // Runs when the page has fully entered and is now the active page.
  // This event will fire, whether it was the first load or a cached page.
  ionViewDidEnter() {
    console.log("-----------------ionViewDidEnter");
  }

  // Runs when the page is about to leave and no longer be the active page.
  ionViewWillLeave() {
    console.log("-----------------ionViewWillLeave");
  }

  // Runs when the page has finished leaving and is no longer the active page.
  ionViewDidLeave() {
    console.log("-----------------ionViewDidLeave");
  }

  // Runs when the page is about to be destroyed and have its elements removed.
  ionViewWillUnload() {
    console.log("-----------------ionViewWillUnload");
  }

  //Runs before the view can enter.
  // This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can enter
  ionViewCanEnter() {
    console.log("-----------------ionViewCanEnter");
  }

  // Runs before the view can leave.
  // This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can leave
  ionViewCanLeave() {
    console.log("-----------------ionViewCanLeave");
  }

}
