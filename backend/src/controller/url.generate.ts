import { type Request, type Response } from "express";
import { nanoid } from "nanoid";
import URL from "../models/url.model";

export const generateUrl = async (req : Request, res : Response) => {
    const body = req.body;
    if(!body.url) return res.status(400).json({error : "URL is Required"});

    const shortId = nanoid(8);
    
    await URL.create({
        shortId : shortId,
        redirectUrl : body.url
    })

    return res.status(200).json({
        id : shortId
    })
}