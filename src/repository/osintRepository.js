import Url from "../models/Url.js";
import { saveUserUrlId } from "./userRepository.js";

export async function saveUrlRepo({ url, user }) {
  try {
    const result = await Url.create({ url: url, user: user });
    const pushId = await saveUserUrlId(result);
    if (!pushId) {
      throw new Error(`Could not saved url id: ${error.message}`);
    }
    return result;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}
