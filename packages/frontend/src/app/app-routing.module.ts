import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { AllDealsComponent } from "./all-deals/all-deals.component";

const routes: Routes = [
  {
    path: "",
    component: AllDealsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }
