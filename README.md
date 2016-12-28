# directory-to-tgz

[![travis build](https://img.shields.io/travis/narkhedegs/directory-to-tgz.svg?style=flat-square)](https://travis-ci.org/narkhedegs/directory-to-tgz)
[![codecov coverage](https://img.shields.io/codecov/c/github/narkhedegs/directory-to-tgz.svg?style=flat-square)](https://codecov.io/github/narkhedegs/directory-to-tgz)
[![version](https://img.shields.io/npm/v/directory-to-tgz.svg?style=flat-square)](http://npm.im/directory-to-tgz)
[![downloads](https://img.shields.io/npm/dm/directory-to-tgz.svg?style=flat-square)](http://npm-stat.com/charts.html?package=directory-to-tgz&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/directory-to-tgz.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

> Packs given directory into .tgz file

## Install

```
$ npm install --save directory-to-tgz
```

## Usage

directory-to-tgz allows you to pack the given directory into a .tgz file. An optional second parameter, named options, can be supplied to perform advance operations such as ignoring files, specifying specific files etc. The options parameter is same as the options parameter in [tar-fs.pack](https://github.com/mafintosh/tar-fs) function.

```js
import directoryToTgz from 'directory-to-tgz';
import fs from 'fs';

directoryToTgz('./my-directory')
  .pipe(fs.createWriteStream('my-tarball.tar.gz'));
```

## API

### directoryToTgz(directoryPath, [options])

Packs given directory into .tgz file. The options parameter is same as the options parameter in [tar-fs.pack](https://github.com/mafintosh/tar-fs) function.

## Lisence

MIT © [Gaurav Narkhede](http://www.narkhedegs.com)
