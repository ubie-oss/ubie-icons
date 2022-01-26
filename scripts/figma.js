const got = require('got');
const request = require('request');
const { resolve } = require('path');
const fs = require('fs');
const TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

const download = (url, path, callback) => {
  // TODO: requestはdeprecatedなどで別のものに置き換える
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

async function main() {
  const { body } = await got(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`, {
    headers: {
      'X-FIGMA-TOKEN': TOKEN,
    },
    responseType: 'json',
  })
  const results = body.meta.components
  const ids = results.map(r => r.node_id).join(',')
  const {
    body: {
      images
    }
  } = await got(`https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${ids}&format=svg`, {
    headers: {
      'X-FIGMA-TOKEN': TOKEN,
    },
    responseType: 'json',
  })
  const nodeIds = Object.keys(images);
  for (const nodeId of nodeIds) {
    const url = images[nodeId]
    const result = results.find(r => r.node_id === nodeId)
    const name = result.name
    const path = resolve(__dirname, `../assets/${name}.svg`);
    download(url, path, () => {
      console.log(path,'done!')
    })
  }
}

main();