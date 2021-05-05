
function init(basePath = './') {
  console.info("codereaderWasm", "init");

  // Go => vem do arquivo wasm_exec.js inserido no header
  const go = new Go();
  let loaded = false;

  // Uma forma de fazer o mapa das funcoes
  let mygoapp = {
    myFunc: function() {},
    myFuncErr: function() {},
    /**
     * readByteArr
     * @param {Uint8Array|Uint8ClampedArray} bf Uint8Array or Uint8ClampedArray
     * @returns {Promise<any>}
     */
    readByteArr: function(bf) {},
  };

  async function getMyGoApp() {
    if (loaded) {
      // console.debug("codereaderWasm", "already loaded");
      return mygoapp;
    }

    // Safari No support
    // const result = await WebAssembly.instantiateStreaming(fetch("codereader.wasm"), go.importObject)

    // Increased compatibility, Safari support
    const response = await fetch(basePath + "codereader.wasm");
    const buffer = await response.arrayBuffer();
    const result = await WebAssembly.instantiate(buffer, go.importObject);
    go.run(result.instance);

    // alterado de window para self, permitindo a compatibilidade com webworker
    // mygoapp = window.mygoapp;
    mygoapp = self.mygoapp;
    loaded = true;
    console.info("codereaderWasm", "loaded");
    return mygoapp;
  }

  return { getMyGoApp }
}

// Chama o `getMyGoApp` para acelerar a inicializacao
// getMyGoApp();

export default { init }
