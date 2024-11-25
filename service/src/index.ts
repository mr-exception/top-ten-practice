import express from "express";

export const app = express();

app.get("/", (_, res) => {
  res.send({ ok: true });
});

app.listen(3000, () => {
  console.log("service started");
});
