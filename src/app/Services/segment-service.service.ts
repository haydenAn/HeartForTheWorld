import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SegmentServiceService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSegmentDataList(){
    let url = this.baseUrl + "ItemGroup";
    return this.http
      .get<any>(url, { observe: "response", headers:
      new HttpHeaders(
        {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : "*",
          'X-Requested-With': 'XMLHttpRequest',
        }
      ) })
  }   
}
