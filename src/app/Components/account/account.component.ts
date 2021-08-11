import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountriesServiceService } from 'src/app/Services/countries-service.service';
import { countriesList } from 'src/app/Data/countries';
import { watchingOnList } from 'src/app/Data/watchingOn';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  IsEditMode = false;
  Partner = {
    FirstName:"",
    MiddleName: "",
    LastName : "",
    SpouseFirst : "",
    SpouseLast : "",
    AltContactFirst : "",
    AltContactLast : "",
    Phone: "",
    AltPhone : "",
    Email : "",
    City : "",
    State : "",
    Zip : "",
    Country:"United States",
    Address1:"",
    Address2:"",
    Address3:"",
    Address4:"",
    WatchingOn : "",
    IsIndividual : true,
    ReceiveProduct : true,
    DoNotContact : true,
    DoNotMerge : false,
    Deceased : false,
    Comments : "",
    CompanyName : "",
    PartnerConsts : {
      MaxCompanyNameLength : 90,
      MinCompanyNameLength : 3,
      MaxPhoneLength:12,
      MinPhoneLength: 10
    }
  }
   countriesList = countriesList;
   watchingOnList = watchingOnList;
  constructor(private cService : CountriesServiceService) { }
  ngOnInit(): void {
    this.cService.getAllCountryInfoList()
    .subscribe((data : any)=>{
      console.log(data);
    })
  }

  onPartnerTypeChanged(e : any){
     const Individual = "individual".toUpperCase()
     let selectedElId = e.target.id.toUpperCase();
     if(selectedElId == Individual){
       this.Partner.IsIndividual = true;
     }else{
       this.Partner.IsIndividual = false;
     }
  }

  onCountrySelectionChanged(country : string){
     this.Partner.Country = country;
  }

}
