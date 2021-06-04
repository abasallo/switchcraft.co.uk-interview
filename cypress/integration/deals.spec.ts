context("Deals", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have a title", () => {
    cy.get("[data-e2e='main-title']")
      .should("contain.text", "List of deals");
  });

  it("displays the expected number of deals", () => {
    const expectedNumberOfDeals = 2;
    cy.get("[data-e2e='deal']")
      .should("have.length", expectedNumberOfDeals);
  });

  it("the deals have a price per year", () => {
    cy.get("[data-e2e='deal'] [data-e2e='cost']")
      .contains(/£\d* a year/);
  });
});
