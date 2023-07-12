import { TaskExecutor } from "yajsapi";

(async function main() {
  let textToBeConvertedToSpeech = "This is a sample text to be converted to speech.";
  const executor = await TaskExecutor.create("48fa1248c8db7a8148fa23c8cfe32bd18cafa0d5d12c9a3178fb5104");
  if (process.argv.length > 2 && process.argv[2]) {
    console.log("Using command line argument as text to be converted to speech.")
    textToBeConvertedToSpeech = process.argv[2];
  }
  await executor.run(async (ctx) => {
    const result = await ctx.run(`espeak "${textToBeConvertedToSpeech}" -w /golem/output/result.wav && ffmpeg -i /golem/output/result.wav /golem/output/result.mp3`);
    if (result) {
      await ctx.downloadFile("/golem/output/result.mp3", "./result.mp3");
    }
  });
  await executor.end();
})();
