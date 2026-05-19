import express from "express";
import { generateUrl } from "../controller/url.generate.js";
import { redirectUrl } from "../controller/url.get.js";

const router = express.Router();

router.post('/url', generateUrl);
router.get('/:shortId', redirectUrl)

export default router;