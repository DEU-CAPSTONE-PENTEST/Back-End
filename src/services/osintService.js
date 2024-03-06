import { saveUrlRepo } from "../repository/osintRepository.js";

export async function startOsint({ url, user }) {
  try {
    const result = await saveUrlRepo({ url, user });
    if (!result) {
      throw new Error("Failed to save URL");
    }
    return "Success";
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}
