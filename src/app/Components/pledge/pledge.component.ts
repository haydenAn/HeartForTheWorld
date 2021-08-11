import { Component, OnInit } from '@angular/core';
import { SegmentServiceService } from 'src/app/Services/segment-service.service';
import { itemGroupitems } from 'src/app/Data/itemgroup';
import { countriesList } from 'src/app/Data/countries';
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
    NumberOfPayments : 1
  }
  ShowsList= [
    "Dave Roever", "Dwight Pate","General 2021","George Bloomer","Israel","Jentezen Franklin","Jesse Duplantis","Jimmy Evans","Joel Osteen","John and Matt Hagee","John Hagee","Jonathan Cahn","Lance Wallnau","Larry Huch","One Time Donation/Tithe","Perry Stone","Robert Morris"
  ];
  JFTest = [
    "Hebrew Home Blessing Artwork","No Fear CD","Covenant Partner of Israel","The Blessing Blanket","Daystar Gala Invitation Packet"
  ]
  DP = [
    "Anointing Oil","Daystar Gala Invitation Packet","The Blessing Blanket"
  ]
  JFSelected = false;
  DPSelected = false;
  Filtereditems = [];
  countries = countriesList;



  constructor(private segService : SegmentServiceService) { }

  ngOnInit(): void {
  }
  update_foreign_currency_textbox(){
  }
  getSegmentDataList(){
    this.segService.getSegmentDataList().subscribe(x=>{
      console.log(x)
    })
  }
  onShowListSelectionChanged(showName){
    if(showName == "Jentezen Franklin"){
      this.JFSelected = true;
      this.DPSelected = false;
    }
    else if(showName =="Dwight Pate"){
      this.DPSelected = true;
      this.JFSelected = false;
    }
    else{
      this.JFSelected = false;
      this.DPSelected = false;
    }
  }

}


