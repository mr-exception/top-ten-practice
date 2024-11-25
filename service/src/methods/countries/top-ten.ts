import { Request, Response } from "express";
import { searchCountries } from "../../models/countries";

/**
 * returns the list of top ten countries with
 * highest avg earnings
 */
export default async function handle(_: Request, res: Response) {
  const countries = await searchCountries();
  const results = countries.sort((a, b) => b.avgEarning - a.avgEarning).slice(0, 10);
  res.send({ data: results });
}
