import * as chai from 'chai';
import sinon from 'sinon';
import fs from 'fs';
import tar from 'tar-fs';
import sinonChai from 'sinon-chai';
import zlib from 'zlib';
import directoryToTgz from './index';

let expect = chai.expect;
chai.use(sinonChai);

describe('directory-to-tgz', function () {
  let sandbox;

  beforeEach('create sinon sandbox', function () {
    sandbox = sinon.sandbox.create();
  });

  afterEach('dispose sinon sandbox', function () {
    sandbox.restore();
  });

  describe('directoryToTgz', function () {
    it('it should exist', function () {
      expect(directoryToTgz).to.exist;
    });

    it('it should be a function', function () {
      expect(directoryToTgz).to.be.function;
    });

    describe('given falsy value for directoryPath parameter', function () {
      const error = 'Value for directoryPath parameter cannot be falsy.'
      it('it should throw error: ' + error, function () {
        const falsyValues = [false, undefined, null, 0, NaN, '', ""];
        falsyValues.forEach(function (falsyValue) {
          expect(function () { directoryToTgz(falsyValue); }).to.throw(error);
        });
      });
    });

    describe('given non-existent directory path as a value for directoryPath parameter', function () {
      const error = 'Value for directoryPath must be a valid and existing directory path.';
      const nonExistentDirectoryPath = './NonExistent';

      beforeEach(function () {
        sandbox.stub(fs, 'existsSync', function () { return false; });
      });

      it('it should throw error: ' + error, function () {
        expect(function () { directoryToTgz(nonExistentDirectoryPath) }).to.throw(error);
      });
    });

    describe('given an existent directory path as a value for directoryPath parameter', function () {
      const existentDirectoryPath = '../test-fixtures/sample-directory';
      let tarPackSpy;
      let zlibGzipSpy;
      beforeEach(function () {
        sandbox.stub(fs, 'existsSync', function () { return true; });
        tarPackSpy = sandbox.spy(tar, 'pack');
        zlibGzipSpy = sandbox.spy(zlib, 'Gzip');
      });

      it('it should not throw error', function () {
        expect(function () { directoryToTgz(existentDirectoryPath) }).to.not.throw(Error);
      });

      it('it should create tar of the given directory', function () {
        directoryToTgz(existentDirectoryPath);

        expect(tarPackSpy).to.have.been.calledOnce;
      });

      it('it should gzip tar of the given directory', function () {
        directoryToTgz(existentDirectoryPath);

        expect(zlibGzipSpy).to.have.been.calledOnce;
      });
    });
  });
});
