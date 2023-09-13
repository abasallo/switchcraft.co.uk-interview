import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SingleDealComponent } from "./single-deal/single-deal.component";
import { AllDealsComponent } from "./all-deals/all-deals.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
  AppComponent,
  SingleDealComponent,
  AllDealsComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
