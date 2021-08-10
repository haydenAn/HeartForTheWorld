import { Component, OnInit } from '@angular/core';

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
    Country:"",
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

  constructor() { }

  ngOnInit(): void {
  }

}
