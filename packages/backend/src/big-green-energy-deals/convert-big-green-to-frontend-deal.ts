import type { BigGreenEnergyDeal, FrontendDeal } from "@switchcraft-interview/shared-models";

export const convertBigGreenToFrontendDeal = (
  bigGreenEnergyDeal: BigGreenEnergyDeal
): FrontendDeal => {
  return {
    dealName: bigGreenEnergyDeal.name,
    supplierName: bigGreenEnergyDeal.supplierName,
    yearlyCost: bigGreenEnergyDeal.annualCost,
    isGreenEnergy: bigGreenEnergyDeal.isGreenEnergy,
    durationMonths: bigGreenEnergyDeal.durationMonths,
    logo: bigGreenEnergyDeal.logo
  };
};
