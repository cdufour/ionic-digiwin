import { Component } from '@angular/core';
import { Network, ConnectionStatus } from '@capacitor/network';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  isConnected: boolean = true;

  constructor(private platform: Platform) {
    Network.addListener('networkStatusChange', (status) => {
      this.isConnected = status.connected;
    })

    // le service Platform permet de prendre des dispos particulières
    // en fonction de l'env d'exec ("ios" | "android" | etc...)
    console.log(platform.is("desktop") )
  }

}
