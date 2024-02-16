import busboy from 'busboy';

export async function getSnapshotFileFromRequestBody(req) {
  return new Promise((resolve, reject) => {
    const bb = busboy({
      headers: req.headers,
    });
    bb.on('file', (_name, stream, _info) => {
      const dataParts = []
      stream.on('data', (buf) => {
        dataParts.push(buf);
      });
      stream.on('end', () => {
        resolve(Buffer.concat(dataParts));
      });
      stream.on('error', (e) => {
        reject(e);
      })
    });
    req.pipe(bb);
  });
}