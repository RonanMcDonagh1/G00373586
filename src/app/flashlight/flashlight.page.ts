import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Flashlight } from '@ionic-native/flashlight/ngx';//from ionic documentaion allows us to use the flashlight feature

@Component({
  selector: 'app-flashlight',
  templateUrl: './flashlight.page.html',
  styleUrls: ['./flashlight.page.scss'],
})
export class FlashlightPage {

  constructor(private navCtrl:NavController, private flashlight: Flashlight) {}//navcontroller allows us to navigate between the pages of the application, also creates flashlight

  ngOnInit(){

  }
//changes page to teams page
  openTeams(){
    this.navCtrl.navigateForward('/teams');
  }
//changes page to team-records page
  openTeamRecords(){
    this.navCtrl.navigateForward('/team-records');
  }

//changes page to home page
  openHome(){
    this.navCtrl.navigateForward('/home');
  }

  //changes page to flashlight page
  openFlashlight(){
    this.navCtrl.navigateForward('/flashlight');
  }

  //changes page to info page
  openInfo(){
    this.navCtrl.navigateForward('/info');
  }
//toggles flashlight on and off
  Flashlight(){
    this.flashlight.toggle();
  }
}
