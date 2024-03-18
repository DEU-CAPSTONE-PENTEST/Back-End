import OutPut from "../models/Output.js";
import Url from "../models/Url.js";
import User from "../models/User.js";
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

export async function saveOutputRepo(urlId, output) {
  try {
    console.log(urlId);
    console.log(output);

    const result = await OutPut.create({ url: urlId, output: output });
    return result;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

export async function getAllOsintRepo(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const urls = await Url.find({ user: userId });
    return urls;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}
