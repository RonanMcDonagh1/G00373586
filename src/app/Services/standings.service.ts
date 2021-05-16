import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private httpClient:HttpClient) { }//allows application to access information stored online such as the api used here



  GetStandingsData():Observable<any>{
 return this.httpClient.get('https://jsonblob.com/api/ccc17823-b5f8-11eb-b540-b308e955498c');//links application to API info 
}

}
