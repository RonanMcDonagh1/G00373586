import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private httpClient:HttpClient) { }//creats httpClient which alows application to access info stored in api from the intenet



  GetTeamData():Observable<any>{
 return this.httpClient.get('https://jsonblob.com/api/2aa82520-b655-11eb-b540-a165850e750f');//Links program to the api using httpClient
}

}
