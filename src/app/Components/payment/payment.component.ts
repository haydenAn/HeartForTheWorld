import { Component, OnInit } from '@angular/core';
import { SlideUpDownAnimation } from 'src/Styles/animation';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  animations:[SlideUpDownAnimation]
})
export class PaymentComponent implements OnInit {

  selectedPayment : string =  PaymentMethod.CCDebit;
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
  paymentMethodSelection = {
    EFT : false,
    CCDebit : true,
    MailCheck : false 
  }
  isPaymentMethodConfirmed : boolean = false;
  paymentFieldState : string = PaymentFieldState.OPEN;
  constructor() { }

  ngOnInit(): void {
  }
  paymentMethodSelectionHandler(method : PaymentMethod){
    for (let paymentMethod in this.paymentMethodSelection) {
      if (paymentMethod == method.toString() ) {
        this.paymentMethodSelection[paymentMethod] = true;
      }
      else{
        this.paymentMethodSelection[paymentMethod] = false;
      }
    }
  }
  onPaymentMethodChanged(e : any){
    let selectedElId = e.target.id;
    switch (selectedElId) {
      case PaymentMethod.CCDebit:
          this.paymentMethodSelectionHandler(PaymentMethod.CCDebit);
        break;
        case PaymentMethod.MailCheck:
          this.paymentMethodSelectionHandler(PaymentMethod.MailCheck);
          break;
          case PaymentMethod.EFT:
            this.paymentMethodSelectionHandler(PaymentMethod.EFT);
            break;
      default:
        this.paymentMethodSelectionHandler(PaymentMethod.CCDebit);
        break;
    }
  }
  onUseThisPaymentClicked(){
    //validation 
    //close
    // $("#payment-method").slideDown("fast");
    // $('#paymentField-change').hide();
    // $('#paymentField-close').show();
    // $('#paymentMethod-header').text("Choose Payment Method");
    // $('#paymentMethod-header').css("color", "#c45500");
    // $('#paymentField-flip').css("border", "none");
    // $("#selected-payment-method-wrapper").hide();
     if(this.isPaymentMethodConfirmed){
       //open
      this.paymentFieldState = PaymentFieldState.OPEN;
      this.isPaymentMethodConfirmed = false;
     }else{
       //close
       this.paymentFieldState = PaymentFieldState.CLOSE;
       this.isPaymentMethodConfirmed = true;
     }
     console.log(this.paymentFieldState)
  }
  onChangePaymentClicked(){

  }

}


enum PaymentMethod{
  EFT = "EFT",
  CCDebit = "CCDebit",
  MailCheck = "MailCheck"
}

export enum PaymentFieldState{
  OPEN = "OPEN",
  CLOSE = "CLOSE"
}