import { expose } from "comlink";
import BigNumber from "bignumber.js";
import {
  initialize,
  ZoKratesProvider,
  CompilationArtifacts,
  ComputationResult,
  Proof,
  SetupKeypair,
} from "zokrates-js";

let provider: ZoKratesProvider;
let compilationArtifact: CompilationArtifacts;
let computation: ComputationResult;
let proof: Proof;
let keyPair: SetupKeypair;

let x = new BigNumber(123.4567);
console.log(x);
const test = () => {
  console.log("memo");
};

const init = async () => {
  console.log("inside initialize");
  console.log(provider);
  console.log(compilationArtifact);
  console.log(computation);
  console.log(proof);
  console.log(keyPair);
  initialize().then((x: any) => {
    provider = x;
  });
  console.log(provider);
  initialize().then((_provider: any) => {
      provider = _provider;
      console.log("initialized the provider")
  });
};

const exports = {
  test,
  init,
};

export type ZKCRAWorker = typeof exports;

expose(exports);
