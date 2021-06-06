import { dealsByYearlyCost } from "./sort";

const deal1 = { dealName: "dealName1",
  supplierName: "supplierName1",
  yearlyCost: "1",
  isGreenEnergy: true,
  logo: "logo1" };

const deal2 = { dealName: "dealName2",
  supplierName: "supplierName2",
  yearlyCost: "2",
  isGreenEnergy: false,
  logo: "logo2" };

const deal3 = { dealName: "dealName3",
  supplierName: "supplierName3",
  yearlyCost: "3",
  isGreenEnergy: true,
  logo: "logo3" };

describe("Deals sorting utility", () => {

  const testCases = test.each`
   input                    | expectedOutput
   ${[]}                    | ${[]}
   ${[deal1]}               | ${[deal1]}
   ${[deal1, deal2]}        | ${[deal1, deal2]}
   ${[deal2, deal1]}        | ${[deal1, deal2]}
   ${[deal1, deal2, deal3]} | ${[deal1, deal2, deal3]}
   ${[deal3, deal2, deal1]} | ${[deal1, deal2, deal3]}
   ${[deal1, deal3, deal2]} | ${[deal1, deal2, deal3]}
  `;

  testCases("it should return $expectedOutput when input is: $input",
    ({ input, expectedOutput }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      expect(dealsByYearlyCost(input)).toEqual(expectedOutput);
    });
});
