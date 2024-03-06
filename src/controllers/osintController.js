import { startOsint } from "../services/osintService.js";

export async function onStartOsint(req, res) {
  try {
    const { url, user } = req.body;

    const result = await startOsint({ url, user });
    if (!result) {
      res.status(400).json({ status: "failed" });
    }
    res.status(201).json({ status: "Success" });
  } catch (error) {
    res.status(500).json(error);
  }
}
