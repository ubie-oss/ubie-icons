import { resolve } from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { GetFileComponentsResponse, GetImagesResponse } from '@figma/rest-api-spec';
import { Readable } from 'stream'; // Add this import

const TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const download = async (url: string, path: string, callback: () => void) => {
  const streamPipeline = promisify(pipeline);
  const response = await fetch(url);
  if (!response.body) {
    throw new Error(`unexpected response ${response.statusText}`);
  }
  const readableStream = response.body as unknown as Readable; // Convert response.body to ReadableStream
  await streamPipeline(readableStream, createWriteStream(path));
  callback();
};

const main = async () => {
  if (!TOKEN || !FIGMA_FILE_KEY) {
    throw new Error('FIGMA_TOKEN and FIGMA_FILE_KEY must be provided');
  }

  const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`, {
    headers: {
      'X-FIGMA-TOKEN': TOKEN,
    },
  });
  const { meta }: GetFileComponentsResponse = await response.json();
  const results = meta.components;
  const ids = results.map((r) => r.node_id).join(',');

  const svgResponse = await fetch(`https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${ids}&format=svg`, {
    headers: {
      'X-FIGMA-TOKEN': TOKEN,
    },
  });
  const { images }: GetImagesResponse = await svgResponse.json();
  const nodeIds = Object.keys(images);

  for (const nodeId of nodeIds) {
    const url = images[nodeId];
    if (!url) continue;
    const result = results.find((r) => r.node_id === nodeId);
    const name = result?.name;
    const path = resolve(__dirname, `../assets/${name}-icon.svg`);
    download(url, path, () => {
      console.log(path, 'done!');
    });
  }
};

main();
