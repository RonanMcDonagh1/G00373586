import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {StandingsService} from '../Services/standings.service';

@Component({
  selector: 'app-team-records',
  templateUrl: './team-records.page.html',
  styleUrls: ['./team-records.page.scss'],
})
export class TeamRecordsPage implements OnInit{
  StandingsData:any = [];
    constructor(private navCtrl:NavController, private standingsService:StandingsService) {}//navcontroller allows us to navigate between the pages of the application, also creates standingsService which allows us to store the standings data from api
  
    ngOnInit(){
  
      this.standingsService.GetStandingsData().subscribe(
  
        (data)=>{
          this.StandingsData = data.standings;
          console.log(this.StandingsData);//gets the standings data from the standings api using the standings.Service service
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
  