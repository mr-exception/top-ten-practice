import express from "express";
import cors from "cors";

// routes
import countriesRoute from "./methods/countries/routes";

export const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send({ ok: true });
});

app.use("/countries", countriesRoute);

app.listen(3000, () => {
  console.log("service started");
});
