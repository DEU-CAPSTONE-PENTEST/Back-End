import { Router } from "express";
import { onStartOsint } from "../controllers/osintController.js";

const router = new Router();

router.route("/").post(onStartOsint);

export default router;
