import { CurrencyConversionResponse } from "../types/CurrencyConversionResponse";

export const ConvertCurrencies = async (
  from: string,
  to: string,
  amount: number
): Promise<CurrencyConversionResponse[]> => {
  const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`;
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
    const result: CurrencyConversionResponse[] = await response.json();
    if (result) {
      console.log("Result: ", result);
      return result;
    } else {
      console.error("API request unsuccessful");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
