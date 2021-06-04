db.createCollection("bigGreenEnergyDeals");
db.createCollection("shinyYellowEnergyDeals");

const bigGreenEnergyDeals = [
  {
    name: "Fixed Green Deal",
    supplierName: "Big Green Energy",
    annualCost: 450,
    isGreenEnergy: true,
    durationMonths: 12,
    logo: "<svg xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(0,255,0);'/></svg>"
  },
  {
    name: "Big Green Deal",
    supplierName: "Big Green Energy",
    annualCost: 500,
    isGreenEnergy: true,
    logo: "<svg xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(0,255,0);'/></svg>"
  },
];

const shinyYellowEnergyDeals = [
  {
    name: "Shiny Forever",
    monthlyCost: 50,
    green: false,
    logo: "<svg xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='40' stroke='black' fill='yellow'/></svg>"
  },
  {
    name: "Shiny 5000",
    monthlyCost: 30,
    green: true,
    duration: "18",
    logo: "<svg xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='40' stroke='black' fill='yellow'/></svg>"
  }
];

db.bigGreenEnergyDeals.insertMany(bigGreenEnergyDeals);
db.shinyYellowEnergyDeals.insertMany(shinyYellowEnergyDeals);
