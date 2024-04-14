import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  saveCommentIdToUrl,
  saveCommentRepo,
} from "../repository/osintRepository.js";
import { getCommentRepo } from "../repository/commentRepository.js";

// Access your API key as an environment variable (see "Set up your API key" above)

const genAI = new GoogleGenerativeAI("AIzaSyD_NwiBa2ipUxQ4M-oBJOuv32fVl4YwsQQ");

export async function startAnalisis(prompt, url) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  const saveComment = await saveCommentRepo(text);
  const saveId = await saveCommentIdToUrl({ comment: saveComment, url: url });
}

export async function getComment(commentID) {
  const result = await getCommentRepo(commentID);

  return result;
}
