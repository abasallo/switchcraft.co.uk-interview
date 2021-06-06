import { FrontendDeal } from "@switchcraft-interview/shared-models";

const LESS_THAN = -1;
const EQUAL = 0;
const GREATER_THAN = 1;

const compareFunction = (a: FrontendDeal, b: FrontendDeal): number => {
  if (a.yearlyCost < b.yearlyCost) {
    return LESS_THAN;
  }
  if (a.yearlyCost > b.yearlyCost) {
    return GREATER_THAN;
  }
  return EQUAL;
};

export const dealsByYearlyCost = (deals: FrontendDeal[]): FrontendDeal[] => {
  return deals.sort(compareFunction);
};
