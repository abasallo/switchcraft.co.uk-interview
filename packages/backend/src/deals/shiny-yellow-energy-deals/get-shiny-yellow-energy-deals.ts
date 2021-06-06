import type { FrontendDeal } from "@switchcraft-interview/shared-models";
import { convertShinyYellowToFrontendDeal } from "./convert-shiny-yellow-to-frontend-deal";
import { getDbShinyYellowEnergyCollection } from "./get-shiny-yellow-energy-deals-collection";

export const getShinyYellowEnergyDeals
  = async (): Promise<FrontendDeal[]> => {
    const collection = await getDbShinyYellowEnergyCollection();
    const deals = await collection.find({}).toArray();
    return deals.map((deal) => convertShinyYellowToFrontendDeal(deal));
  };
