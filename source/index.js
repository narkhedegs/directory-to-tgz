import tar from 'tar-fs';
import zlib from 'zlib';
import fs from 'fs';

export default function directoryToTgz(directoryPath, options) {
  if (!directoryPath) {
    throw new Error('Value for directoryPath parameter cannot be falsy.');
  }

  if (!fs.existsSync(directoryPath)) {
    throw new Error('Value for directoryPath must be a valid and existing directory path.');
  }

  return tar
    .pack(directoryPath, options)
    .pipe(zlib.Gzip());
}
