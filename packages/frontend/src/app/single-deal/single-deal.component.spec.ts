import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FrontendDeal } from "@switchcraft-interview/shared-models";

import { SingleDealComponent } from "./single-deal.component";

describe("SingleDealComponent", () => {
  let component: SingleDealComponent;
  let fixture: ComponentFixture<SingleDealComponent>;

  const deal: FrontendDeal = {
    dealName: "Big Green Deal",
    supplierName: "Big Green Energy",
    yearlyCost: 500,
    isGreenEnergy: false,
    logo: "logo"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleDealComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("when there is a deal with no features", () => {
    beforeEach(() => {
      component.deal = deal;
      fixture.detectChanges();
    });

    test("should have a logo set", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(".logo").style.backgroundImage)
        .toBe(`url(data:image/svg+xml;utf8,${deal.logo})`);
    });

    test("should have a supplier name set", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(".supplier-name").textContent)
        .toBe(deal.supplierName);
    });

    test("should have a deal name set", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(".deal-name").textContent)
        .toBe(deal.dealName);
    });

    test("does not have any features", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(".features").textContent)
        .toBe("");
    });

    test("should have a cost set", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(".cost").textContent)
        .toBe(`£${deal.yearlyCost} a year`);
    });

    test("should not have a duration set", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(".duration"))
        .toBeNull();
    });

  });

  describe("when there is a deal features", () => {
    const dealWithFeatures: FrontendDeal = {
      ...deal,
      durationMonths: 10,
      isGreenEnergy: true
    };

    beforeEach(() => {
      component.deal = dealWithFeatures;
      fixture.detectChanges();
    });

    test("should have features", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(".features").textContent)
        .not.toBe("");
    });

    test("should show the expected number of features", () => {
      const compiled = fixture.debugElement.nativeElement;
      const expectedFeatureLength = 2;
      expect(compiled.querySelectorAll(".feature").length)
        .toBe(expectedFeatureLength);
    });

    test("should show the duration feature info", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(
        compiled.querySelector(".feature")
          .textContent
          .includes("Fixed duration")
      ).toBe(true);
    });

    test("should have a duration set", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(".duration").textContent)
        .toBe(`${dealWithFeatures.durationMonths} months`);
    });

  });

  describe("when there is no deal", () => {

    test("should not have any contents", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.textContent).toBe("");
    });

  });

});
