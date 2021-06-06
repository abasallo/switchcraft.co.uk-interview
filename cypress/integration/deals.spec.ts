context("Deals", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have a title", () => {
    cy.get("[data-e2e='main-title']")
      .should("contain.text", "List of deals");
  });

  it("displays the expected number of deals", () => {
    const expectedNumberOfDeals = 4;
    cy.get("[data-e2e='deal']")
      .should("have.length", expectedNumberOfDeals);
  });

  it("displays expected number of fixed duration deals", () => {
    const expectedNumberOfFixedDurationDeals = 2;
    cy.get("[data-e2e='feature-fixed-duration']")
      .should("have.length", expectedNumberOfFixedDurationDeals);
  });

  it("displays expected number of green energy deals", () => {
    const expectedNumberOfGreenEnergyDeals = 3;
    cy.get("[data-e2e='feature-green-energy']")
      .should("have.length", expectedNumberOfGreenEnergyDeals);
  });

  it("the deals have a price per year", () => {
    cy.get("[data-e2e='deal'] [data-e2e='cost']")
      .contains(/£\d* a year/);
  });
});
