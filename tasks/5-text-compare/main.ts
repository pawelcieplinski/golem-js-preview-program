import { TaskExecutor } from "yajsapi";
import { program } from "commander";

interface Result {
    text: string;
    distance: number;
}

async function main(args) {
  const helloWorlds = [
    "Hello Wrld", "Helo World", "HelloWorld", "Helo World", "Hello Wrld", "Helo Wrld", "Hello World", "Helllo World", "Hello big World", "HeloWorl", "Helloo World", "Hllo World", "Hello W0rld", "Hell o World", "Hell Worlds", "Hello Wor ld", "Helo W0rld", "Helllo World", "Hello big World", "HeloW0rld"
  ];

  const executor = await TaskExecutor.create({
    package: "82f2678d3941af21f3926c2071b171e470cc00c69ad0d67117bd0d55",
    maxParallelTasks: args.numberOfProviders,
    minMemGib: 0.5,
    minStorageGib: 2,
    budget: 10,
    taskTimeout: 180_000
  });

  const step = Math.floor(helloWorlds.length / args.numberOfProviders);
  const range = [...Array(Math.floor(helloWorlds.length / step)).keys()].map((i) => i * step);

  console.log(`Tasks to compute = ${range.length}`);

  const results = executor.map(range, async (ctx, skip = 0) => {
    const slicedData: string[] = helloWorlds.slice(skip, skip + step);
    let data: string[] | string[][] = slicedData;
    if (args.token) {
      data = slicedData.map((text) => text.split(" "));
    }
    const result = await ctx.run(
        `python -c 'import textdistance; arr = ${JSON.stringify(data)}; new_arr = list(map((lambda x: textdistance.${args.token ? 'sorensen' : 'levenshtein'}(${args.token ? JSON.stringify(args.string.split(" ")) : `"${args.string}"`}, x)), arr)); print(new_arr)'`
      );
    let parsedResult : Array<string> = [];
    try {
        parsedResult = JSON.parse(result.stdout || "");
    } catch (e) {
        console.log(e);
    }

    const mappedResult : Array<Result> = parsedResult.map((distance, index) => {
        return {
            text: slicedData[index],
            distance: +distance
        }
    });

    return mappedResult;
  });

  const allResults: Array<Result> = [];

  for await (const result of results) {
    if (result?.length) {
      allResults.push(...result);
    }
  }

  console.log("Best five results:");
  allResults.sort((a, b) => a.distance - b.distance).slice(0, 5).map((result) => {
      console.log(`Text: ${result.text}, Distance: ${result.distance}`);
  });

  await executor.end();
}

program
  .option("--number-of-providers <number_of_providers>", "number of providers", (value) => parseInt(value), 2)
  .option("-t --token", "use token algorithm")
  .requiredOption("--string <string>");
program.parse();
const options = program.opts();
main(options).catch((e) => console.error(e));
