import { Router } from "express";
import { onGetAllOsint, onStartOsint } from "../controllers/osintController.js";

const router = new Router();

router.route("/").post(onStartOsint);
router.route("/").get(onGetAllOsint);
export default router;
