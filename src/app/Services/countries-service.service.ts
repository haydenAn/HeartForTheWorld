import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  
    getAllCountryInfoList() : any {
     let url = this.baseUrl + "App/countries/CountryInfoHeartForTheWorld";
    return this.http
      .get<any>(url, { observe: "response"})
      .pipe(
        map((response) => {
          debugger;
          localStorage.setItem('CountyList', "true");  
          console.log(response);
        })
      );
  }
}
