import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";


// console.log(process.argv)

(async () => {
  await main();
})();


async function main() {

  const { b: base, l: limit, s: showTable, d: destination, n: name } = yarg;

  ServerApp.run({ base, limit, showTable, name, destination });

}