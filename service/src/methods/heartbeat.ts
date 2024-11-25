import { Request, Response } from "express";

export default function heartbeat(_: Request, res: Response): void {
  res.send({
    ok: true,
  });
}
