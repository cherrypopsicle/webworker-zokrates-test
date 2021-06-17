import { expose } from "comlink";
import {
  initialize,
  ZoKratesProvider,
} from "zokrates-js";

// let provider: ZoKratesProvider;

const test = () => {
  console.log("memo");
};

const init = () => {
  initialize().then((_provider: any) => {
    // provider = _provider;
    // console.log("initialized the provider");
  });
};

const exports = {
  test,
  init,
};

export type ZKCRAWorker = typeof exports;

expose(exports);
