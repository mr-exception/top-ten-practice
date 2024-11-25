import { searchPersons } from "./person";

interface ICountry {
  name: string;
  avgEarning: number;
  currency: string;
}

interface RawCountryData {
  name: string;
  totalEarning: number;
  recordCount: number;
  currency: string;
}

/**
 * search all countries based on person records
 */
export async function searchCountries(): Promise<ICountry[]> {
  const persons = await searchPersons({});
  let countries: RawCountryData[] = [];

  persons.forEach((item) => {
    let found = false;
    countries.forEach((cnt) => {
      if (cnt.name !== item.country) {
        return;
      }
      found = true;
      cnt.recordCount += 1;
      cnt.totalEarning += item.earnings;
    });
    if (!found) {
      countries.push({
        name: item.country,
        currency: item.currency,
        recordCount: 1,
        totalEarning: item.earnings,
      });
    }
  });

  return countries.map((item) => {
    return {
      name: item.name,
      currency: item.currency,
      avgEarning: item.totalEarning / item.recordCount,
    };
  });
}
