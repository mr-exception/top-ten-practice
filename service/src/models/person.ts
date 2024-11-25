import fs from "fs";

export interface IPerson {
  id: string;
  earnings: number;
  currency: string;
  country: string;
  name: string;
}

interface PersonRawRecord {
  id: string;
  earnings: string;
  country: string;
  name: string;
}
interface SearchPersonParams {
  name?: string;
  country?: string;
}
export async function searchPersons(params: SearchPersonParams): Promise<IPerson[]> {
  const records = JSON.parse(fs.readFileSync("./data.json").toString()) as PersonRawRecord[];
  const results = records
    .map((item) => {
      let currency = "usd";

      // TODO: add other currencies in future
      if (item.earnings.startsWith("$")) {
        currency = "usd";
      } else {
        currency = "none";
      }

      const earnings = parseFloat(item.earnings.slice(1));

      // considering invalid numbers as currupted data and ignoring them for now
      if (Number.isNaN(earnings)) return undefined;

      return {
        id: item.id,
        country: item.country,
        earnings,
        currency,
        name: item.name,
      };
    })
    .filter((item) => !!item) as IPerson[];
  return results;
}
