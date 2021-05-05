importScripts('../wasm_exec.js');
import codereaderWasm from "@/service/codereaderWasm";
const m = codereaderWasm.init('../');

// let i = 0;

// function init() {
//   importScripts('../wasm_exec.js');
//   console.info("codereaderWasm", "init");
//   // Go => vem do importScripts wasm_exec.js
//   const go = new Go();

//   let loaded = false;

//   // Uma forma de fazer o mapa das funcoes
//   let mygoappW = {
//     myFunc: function() {},
//     myFuncErr: function() {},
//     /**
//      * readByteArr
//      * @param {Uint8Array|Uint8ClampedArray} bf Uint8Array or Uint8ClampedArray
//      * @returns {Promise<any>}
//      */
//     readByteArr: function(bf) {},
//   };

//   async function getMyGoApp() {
//     if (loaded) {
//       console.log("ja carregado")
//       return mygoappW;
//     }

//     // Safari No support
//     // const result = await WebAssembly.instantiateStreaming(fetch("codereader.wasm"), go.importObject)

//     // Increased compatibility, Safari support
//     const response = await fetch("../codereader.wasm");
//     const buffer = await response.arrayBuffer();
//     const result = await WebAssembly.instantiate(buffer, go.importObject);

//     // preenche a variavel mygoapp vinda do DedicatedWorkerGlobalScope
//     go.run(result.instance);
//     mygoappW = self.mygoapp;

//     loaded = true;
//     i++;
//     console.info("codereaderWasm", "loaded", mygoappW, i);
//     return mygoappW;
//   }

//   // Chama o `getMyGoApp` para acelerar a inicializacao
//   // getMyGoApp();

//   return { getMyGoApp }
// }

// const codereaderWasm = init();

// let i = 0;

onmessage = async (e) => {
  const goApp = await m.getMyGoApp();

  try {
    const result = await goApp.readByteArr(e.data.bytes);
    postMessage({ result: result, error: null });
  } catch (error) {
    // new Error() não funciona no iOS, remap para objeto
    const err = {
      message: error.message || null,
      name: error.name || null,
      stack: error.stack || null
    }
    postMessage({ result: null, error: err });
  }

  // console.log(i);

  // const codereaderWasm = init();
  // console.log(e);
  // console.log(codereaderWasm);
  // const myGoApp = await codereaderWasm.getMyGoApp();
  // console.log(myGoApp);

  // postMessage({s:"ola"})
}
