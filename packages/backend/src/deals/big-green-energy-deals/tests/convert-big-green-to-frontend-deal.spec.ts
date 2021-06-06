import type { BigGreenEnergyDeal, FrontendDeal } from "@switchcraft-interview/shared-models";
import { convertBigGreenToFrontendDeal } from "../convert-big-green-to-frontend-deal";

describe("convertBigGreenToFrontendDeal", () => {

  let result: FrontendDeal;

  const bigGreenEnergyDeal: BigGreenEnergyDeal = {
    name: "Fixed Green Deal",
    supplierName: "Big Green Energy",
    annualCost: 450,
    isGreenEnergy: true,
    durationMonths: 12,
    logo: "<svg></svg>"
  };

  beforeEach(() => {
    result = convertBigGreenToFrontendDeal(bigGreenEnergyDeal);
  });

  test("sets the dealName", () => {
    expect(result.dealName).toBe(bigGreenEnergyDeal.name);
  });

  test("sets the supplierName", () => {
    expect(result.supplierName).toBe(bigGreenEnergyDeal.supplierName);
  });

  test("sets the yearlyCost", () => {
    expect(result.yearlyCost).toBe(bigGreenEnergyDeal.annualCost);
  });

  test("sets isGreenEnergy", () => {
    expect(result.isGreenEnergy).toBe(bigGreenEnergyDeal.isGreenEnergy);
  });

  test("sets durationMonths", () => {
    expect(result.durationMonths).toBe(bigGreenEnergyDeal.durationMonths);
  });

  test("sets logo", () => {
    expect(result.logo).toBe(bigGreenEnergyDeal.logo);
  });

});
