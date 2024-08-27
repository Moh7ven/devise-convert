import { CurrencyItem } from "./CurrencyItem";

export type CurrencyApiResponse = {
  success: boolean;
  symbols: CurrencyItem;
};
