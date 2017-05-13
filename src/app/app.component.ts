import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Article Tracker';

  // ngOnInit() {
  //   this.sidenavParams = ['hide'];
  //   this.sidenavActions.emit('sideNav');
  // }

  sidenavActions = new EventEmitter<any>();
  sidenavParams = [];

  ngOnInit() {
    console.log("Been called");
  }

  public showSidenav(): void {
    this.sidenavParams = ['show'];
    this.sidenavActions.emit('sideNav');
  }

  public hideSidenav(): void {
    this.sidenavParams = ['hide'];
    this.sidenavActions.emit('sideNav');
  }
}

