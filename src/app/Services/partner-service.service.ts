import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PartnerServiceService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  // getUserByEmail(email) : any {
  //   var params = new HttpParams();
  //   params = params.append("email", email);
  //   let url = this.baseUrl + "api/user/" + email;
  //   console.log("new report info url=" + url, email);
  //   return this.http
  //     .get<User>(url, { observe: "response" , params})
  //     .pipe(
  //       map((response) => {
  //         console.log(response);
  //         localStorage.setItem('isLoggedIn', "true");  
  //       //   localStorage.setItem('token', response); 
  //         return response
  //       })
  //     );
  // }
  getWatchingOnListByCountry(countryCode: string){
    var params = new HttpParams();
    params = params.append("countryCode", countryCode);
    let url = this.baseUrl + "App/Partners/GetAllWatchingOptions/";
    return this.http
      .get<any>(url, { observe: "response" , params})
      .pipe(
        map((response) => {
          console.log(response);
        //   localStorage.setItem('token', response); 
          return response
        })
      );
  }   
}
