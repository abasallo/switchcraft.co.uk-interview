import type { ShinyYellowEnergyDeal, FrontendDeal } from "@switchcraft-interview/shared-models";

export const SHINY_YELLOW_SUPPLIER_NAME = "Shiny Yellow Energy";
export const MONTHS_IN_A_YEAR = 12;

export const convertShinyYellowToFrontendDeal = (
  shinyYellowEnergyDeal: ShinyYellowEnergyDeal
): FrontendDeal => {
  return {
    dealName: shinyYellowEnergyDeal.name,
    supplierName: SHINY_YELLOW_SUPPLIER_NAME,
    yearlyCost: MONTHS_IN_A_YEAR * shinyYellowEnergyDeal.monthlyCost,
    isGreenEnergy: shinyYellowEnergyDeal.green,
    durationMonths: shinyYellowEnergyDeal.duration
      ? Number(shinyYellowEnergyDeal.duration) : undefined,
    logo: shinyYellowEnergyDeal.logo
  };
};
