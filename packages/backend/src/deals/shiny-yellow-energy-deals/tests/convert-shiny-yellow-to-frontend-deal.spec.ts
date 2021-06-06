import type { ShinyYellowEnergyDeal, FrontendDeal } from "@switchcraft-interview/shared-models";
import {
  convertShinyYellowToFrontendDeal, MONTHS_IN_A_YEAR,
  SHINY_YELLOW_SUPPLIER_NAME
} from "../convert-shiny-yellow-to-frontend-deal";

describe("convertShinyYellowToFrontendDeal", () => {

  let result: FrontendDeal;

  const shinyYellowEnergyDeal: ShinyYellowEnergyDeal = {
    name: "Fixed Green Deal",
    monthlyCost: 30,
    green: true,
    duration: "12",
    logo: "<svg></svg>"
  };

  beforeEach(() => {
    result = convertShinyYellowToFrontendDeal(shinyYellowEnergyDeal);
  });

  test("sets the dealName", () => {
    expect(result.dealName).toBe(shinyYellowEnergyDeal.name);
  });

  test("sets the supplierName", () => {
    expect(result.supplierName).toBe(SHINY_YELLOW_SUPPLIER_NAME);
  });

  test("sets the yearlyCost", () => {
    expect(result.yearlyCost)
      .toBe(shinyYellowEnergyDeal.monthlyCost * MONTHS_IN_A_YEAR);
  });

  test("sets isGreenEnergy", () => {
    expect(result.isGreenEnergy).toBe(shinyYellowEnergyDeal.green);
  });

  test("sets durationMonths", () => {
    expect(result.durationMonths).toBe(Number(shinyYellowEnergyDeal.duration));
  });

  test("sets logo", () => {
    expect(result.logo).toBe(shinyYellowEnergyDeal.logo);
  });
});
