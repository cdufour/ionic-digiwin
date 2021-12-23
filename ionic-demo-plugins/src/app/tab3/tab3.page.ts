import { Component } from '@angular/core';
import { Haptics } from '@capacitor/haptics';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  onClick(): void {
    Haptics.vibrate({duration: 1000}).then(() => {})
  }

}
