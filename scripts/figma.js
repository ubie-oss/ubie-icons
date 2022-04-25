const { resolve } = require('path');
const { createWriteStream } = require('fs');
const { pipeline } = require('stream');
const { promisify } = require('util');
const TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const download = async (url, path, callback) => {
  const streamPipeline = promisify(pipeline);
  const response = await fetch(url);
  await streamPipeline(response.body, createWriteStream(path));
  callback();
};

const main = async () => {
  const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`, {
    headers: {
      'X-FIGMA-TOKEN': TOKEN,
    },
  });
  const { meta } = await response.json();
  const results = meta.components;
  const ids = results.map((r) => r.node_id).join(',');

  const svgResponse = await fetch(`https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${ids}&format=svg`, {
    headers: {
      'X-FIGMA-TOKEN': TOKEN,
    },
  });
  const { images } = await svgResponse.json();
  const nodeIds = Object.keys(images);

  for (const nodeId of nodeIds) {
    const url = images[nodeId];
    const result = results.find((r) => r.node_id === nodeId);
    const name = result.name;
    const path = resolve(__dirname, `../assets/${name}-icon.svg`);
    download(url, path, () => {
      console.log(path, 'done!');
    });
  }
};

main();
