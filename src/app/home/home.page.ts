import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl:NavController) {}

  ngOnInit(){

  }
//Changes page to the teams page
  openTeams(){
    this.navCtrl.navigateForward('/teams');
  }
//changes page to the team-records page
  openTeamRecords(){
    this.navCtrl.navigateForward('/team-records');
  }
//changes page to the info page
 openInfo(){
    this.navCtrl.navigateForward('/info');
  }
  //changes page to the home page
  openHome(){
    this.navCtrl.navigateForward('/home');
  }
//changes page to the flashlight page
  openFlashlight(){
    this.navCtrl.navigateForward('/flashlight');
  }

 


}
