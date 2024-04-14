import { runTool } from "../libs/docker.js";
import {
  saveOutputRepo,
  saveOutputIdToUrl,
} from "../repository/osintRepository.js";
import { startAnalisis } from "../services/commentService.js";

export async function runOsintScan({ parseUrl, saveUrl }) {
  console.log(parseUrl);
  const [nmap, nuclei] = await Promise.all([
    runTool("instrumentisto/nmap", ["-A", "-T4", parseUrl.hostname]),
    // runTool("zungur/pentesttools:nikto", ["-h", parseUrl.origin]),
    runTool("projectdiscovery/nuclei", ["-target", parseUrl.origin]),
  ]);

  const output =
    "\n#####\n\n PENETRATİON TEST RESULT: \n\n NMAP:" +
    nmap +
    // "\n\nNICTO:\n" +
    // nikto +
    " \n#####\n\n" +
    "\n\nNUCLEI:\n" +
    nuclei +
    " \n#####\n\n";
  if (!nmap && !nuclei) {
    throw new Error("Output null");
  }

  const saveOutput = await saveOutputRepo(output);
  const changeUrl = await saveOutputIdToUrl({
    url: saveUrl,
    output: saveOutput,
  });
  if (!saveOutput && !saveUrl) {
    throw new Error("Url and output can not be saved");
  }

  const prompt =
    "senin görevin aşağıda verilen penetration çıktısını analiz edip. Aşağıda verilen Rapor template düzenle ve json formatında döndür." +
    output +
    `#####REPORTİNG TAMPLATE:REPORTING_TEMPLATE: {
  "rapor_tarihi": ,
  "giris": ,
  "kullanilan_araclar": ,
  "bulgular": {
    
  },
  "guvenlik_aciklari": {
    "kritik": [
      
    ],
    "orta": [
      
    ],
    "dusuk": [
      
    ]
  },
  "oneriler": [
  
  ],
  "sonuc": "
}#####`;

  startAnalisis(prompt, changeUrl);
}
