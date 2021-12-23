import { Component } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['./gps.css']
})
export class Tab1Page {

  position: Position | null = null;
  numbers: number[] = [88,4,2.2];
  notification: string = "";

  constructor() {
    this.getPosition();
  }

  getPosition(): void {
    Geolocation
      .getCurrentPosition()
      .then((position: Position) => {
        console.log(position);
        this.position = position;
      })
  }

  onNotify(event: string): void {
    //console.log("Mon fils me dit: " + event)
    //console.log("Je suis ton père et je t'éternue dessus");
    this.notification = "Mon fils me dit: " + event;
  }

}
