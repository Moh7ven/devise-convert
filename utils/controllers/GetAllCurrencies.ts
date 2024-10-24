import { CurrencyItem } from "../types/CurrencyItem";
import { CurrencyApiResponse } from "../types/CurrencyApiResponse";

export const getAllCurrencies = async (): Promise<CurrencyItem[]> => {
  const url =
    "https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "4cbcfa3368msh8efec9911878d3bp1e7a20jsn6f6eac938593",
      "x-rapidapi-host":
        "currency-conversion-and-exchange-rates.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result: CurrencyApiResponse = await response.json();

    if (result.success) {
      return result.symbols;
    } else {
      console.error("API request unsuccessful");
      return [];
    }
    
  } catch (error) {
    console.error(error);
    return [];
  }
};
