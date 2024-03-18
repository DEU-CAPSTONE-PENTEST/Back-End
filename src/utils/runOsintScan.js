import { runTool } from "../libs/docker.js";
import { saveOutputRepo, saveUrlRepo } from "../repository/osintRepository.js";

export async function runOsintScan({ url, user, parseUrl }) {
  let cmd = ["-A", "-T4", parseUrl.hostname];
  let imageName = "instrumentisto/nmap";
  const nmap = await runTool(imageName, cmd);

  cmd = ["nicto", "-h", parseUrl.origin];
  imageName = "securecodebox/nikto";
  const nicto = await runTool(imageName, cmd);

  const output =
    "\n#####\n\n PENETRATİON TEST RESULT: \n\n NMAP:" +
    nmap +
    "\n\nNICTO:\n" +
    nicto +
    " \n#####\n\n";

  console.log(output);

  if (!nmap && !nicto) {
    throw new Error("Output null");
  }

  const saveUrl = await saveUrlRepo({ url, user });
  const saveOutput = await saveOutputRepo(saveUrl._id, output);

  if (!saveOutput && !saveUrl) {
    throw new Error("Url and output can not be saved");
  }
}
