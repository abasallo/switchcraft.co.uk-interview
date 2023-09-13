import { Component, OnInit } from "@angular/core";
import { FrontendDealsResponse, FrontendDeal } from "@switchcraft-interview/shared-models";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-all-deals",
  templateUrl: "./all-deals.component.html",
  styleUrls: ["./all-deals.component.scss"]
  })
export class AllDealsComponent implements OnInit {

  public deals$: Observable<FrontendDeal[]> | undefined;

  constructor (
    private httpClient: HttpClient
  ) {}

  ngOnInit (): void {
    this.refreshDeals();
  }

  refreshDeals (): void {
    this.deals$ = this.httpClient
      .get<FrontendDealsResponse>(
        `${environment.backendUrl}/deals`
      )
      .pipe(
        map((response) => response.deals)
      );
  }

}
