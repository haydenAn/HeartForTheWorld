import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pledge',
  templateUrl: './pledge.component.html',
  styleUrls: ['./pledge.component.css']
})
export class PledgeComponent implements OnInit {
  totalForeignCurrency = 12;
  foreignPayment = "";
  total = "";
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
  Pledge = {
    Note : "",
    AmountPerPayment : "13",


  }
  segment= ["firstSegment","second-segment"];

  constructor() { }

  ngOnInit(): void {
  }
  update_foreign_currency_textbox(){

  }
}
