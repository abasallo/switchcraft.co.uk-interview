import { Component, Input } from "@angular/core";
import { FrontendDeal } from "@switchcraft-interview/shared-models";

@Component({
  selector: "app-single-deal",
  templateUrl: "./single-deal.component.html",
  styleUrls: ["./single-deal.component.scss"]
  })
export class SingleDealComponent {

  @Input() deal: FrontendDeal | undefined;

  getLogoImage (deal: FrontendDeal): string {
    const svg = encodeURI(`data:image/svg+xml;utf8,${(deal.logo)}`);
    return `url("${svg}")`;
  }
}
