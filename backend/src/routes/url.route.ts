import express from "express";
import { generateUrl } from "../controller/url.generate";
import { redirectUrl } from "../controller/url.get";

const router = express.Router();

router.post('/', generateUrl);
router.get('/:shortId', redirectUrl)

export default router;