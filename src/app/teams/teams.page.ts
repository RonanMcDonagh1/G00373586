import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {TeamsService} from '../Services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit{
TeamData:any = [];
  constructor(private navCtrl:NavController, private teamService:TeamsService) {}//navcontroller allows us to navigate between the pages of the application, also creates teamService which allows us to store the team data from api

  ngOnInit(){

    this.teamService.GetTeamData().subscribe(

      (data)=>{
        this.TeamData = data.teams;//gets the teams data from the teams api using the teams.Service service
        console.log(this.TeamData);//logs to browser terminal to show the array and verify that the data is reaching the application
      }
    );

  }
//changes page to the teams page
  openTeams(){
    this.navCtrl.navigateForward('/teams');
  }
//changes page to the team-records page
  openTeamRecords(){
    this.navCtrl.navigateForward('/team-records');
  }
//changes page to the home page
  openHome(){
    this.navCtrl.navigateForward('/home');
  }
//changes page to the flashlight page
  openFlashlight(){
    this.navCtrl.navigateForward('/flashlight');
  }
//changes page to the info page
  openInfo(){
    this.navCtrl.navigateForward('/info');
  }


}
