import request from "supertest";
import { app } from ".";
test("testing heartbeat", async () => {
  const res = await request(app).get("/");
  await expect(res.body).toEqual({ ok: true });
});
