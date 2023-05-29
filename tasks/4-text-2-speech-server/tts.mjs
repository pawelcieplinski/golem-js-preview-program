import { TaskExecutor } from "yajsapi";

const tts = async (textToBeConvertedToSpeech, outputFileName) => {
  let success = false;
  const executor = await TaskExecutor.create({
        package: "87a2107b08d84d94889f114b58a465a28f5634f799705bf8cd55fa80",
        maxParallelTasks: 16
    });
  await executor.run(async (ctx) => {
    const result = await ctx.run(`espeak "${textToBeConvertedToSpeech}" -w /golem/output/result.wav && ffmpeg -i /golem/output/result.wav /golem/output/result.mp3`);
    if (result) {
      await ctx.downloadFile("/golem/output/result.mp3", `./output/${outputFileName}.mp3`);
      success = true;
    }
  });
  await executor.end();
  return success;
};

export default tts;