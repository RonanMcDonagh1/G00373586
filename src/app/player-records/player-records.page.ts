import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-player-records',
  templateUrl: './player-records.page.html',
  styleUrls: ['./player-records.page.scss'],
})
export class PlayerRecordsPage {

  constructor(private navCtrl:NavController) {}

  ngOnInit(){

  }

  openTeams(){
    this.navCtrl.navigateForward('/teams');
  }

  openTeamRecords(){
    this.navCtrl.navigateForward('/team-records');
  }


  openHome(){
    this.navCtrl.navigateForward('/home');
  }

  openPlayerRecords(){
    this.navCtrl.navigateForward('/player-records');
  }

  openInfo(){
    this.navCtrl.navigateForward('/info');
  }


}
