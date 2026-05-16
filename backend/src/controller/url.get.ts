import {type Request, type Response} from "express";
import URL from "../models/url.model";

export const redirectUrl = async (req: Request, res: Response) => {
  const shortId : any = req.params.shortId;

  const entry = await URL.findOne({shortId});

  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  return res.redirect(entry.redirectUrl);
};