import type { FrontendDeal } from "@switchcraft-interview/shared-models";
import { convertBigGreenToFrontendDeal } from "./convert-big-green-to-frontend-deal";
import { getDbBigGreenEnergyCollection } from "./get-big-green-energy-deals-collection";

export const getBigGreenEnergyDeals
  = async (): Promise<FrontendDeal[]> => {
    const collection = await getDbBigGreenEnergyCollection();
    const deals = await collection.find({}).toArray();
    return deals.map((deal) => convertBigGreenToFrontendDeal(deal));
  };
