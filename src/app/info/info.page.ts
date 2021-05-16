import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage {

  constructor(private navCtrl:NavController) {}//creats navController which allows us to navigate the pages of the tabs

  ngOnInit(){

  }

  //Changes page to the teams page
  openTeams(){
    this.navCtrl.navigateForward('/teams');
  }

  //Changes page to the teams-records page
  openTeamRecords(){
    this.navCtrl.navigateForward('/team-records');
  }

//Changes page to the home page
  openHome(){
    this.navCtrl.navigateForward('/home');
  }

  //Changes page to the flashlight page
  openFlashlight(){
    this.navCtrl.navigateForward('/flashlight');
  }

  //Changes page to the info page
  openInfo(){
    this.navCtrl.navigateForward('/info');
  }


}
