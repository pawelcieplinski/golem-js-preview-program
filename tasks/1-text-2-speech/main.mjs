import { TaskExecutor } from "yajsapi";

(async function main() {
  let textToBeConvertedToSpeech = "This is a sample text to be converted to speech.";
  const executor = await TaskExecutor.create("69d42cc2cbe06474d75945a20cf4d084f09ebae765d27208dc968a74");
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
