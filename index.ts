import { FW, IFWOptions } from "fw";
import { readFileSync } from "fs";
import Controllers from "./Controllers";
const Options: IFWOptions = {
  Cert: readFileSync("./Cert/server-cert.pem"),
  Key: readFileSync("./Cert/server-key.pem"),
  Root: "Home",
  Port: 443,
  Public: "./Public",
  Controllers,
  Context: { Version: 1 }
}

const Site = new FW(Options)