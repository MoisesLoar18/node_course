import yargs, { option } from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    description: "Base de la multiplicación",
    demandOption: true,
  })
  .option("l", {
    alias: "limit",
    type: "number",
    description: "Limite de la multiplicación",
    default: 10,
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    description: "Muestra la tabla en consola",
    default: false,
  })
  .check((argv, options) => {
    if (argv.b < 1) throw "La base debe ser mayor a 0";
    return true;
  })
  .parseSync();
