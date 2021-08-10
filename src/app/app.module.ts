import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { AccountComponent } from './Components/account/account.component';
import { PledgeComponent } from './Components/pledge/pledge.component';
import { PrayerComponent } from './Components/prayer/prayer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    PledgeComponent,
    PrayerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
