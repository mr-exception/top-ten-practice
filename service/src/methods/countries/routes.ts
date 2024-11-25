import { Router } from "express";

import topTen from "./top-ten";

const routes = Router();
// methods goes here

routes.get("/top-ten", topTen);

export default routes;
