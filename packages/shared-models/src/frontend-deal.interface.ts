export interface FrontendDeal {
  readonly dealName: string;
  readonly supplierName: string;
  readonly yearlyCost: number;
  readonly isGreenEnergy: boolean;
  readonly durationMonths?: number;
  readonly logo: string;
}
