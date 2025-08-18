import { yarg } from "./config/plugins/args.plugin";


// console.log(process.argv)

(async () => {
  await main();
})();


async function main() {

  console.log('yarg :>> ', yarg);

}