
const wasm = await Deno.readFile("./wasm_test/pkg/wasm_test_bg.wasm");




const wasmModule = new WebAssembly.Module(wasm);

const wasmInstance = new WebAssembly.Instance(wasmModule);

const wasm_test = wasmInstance.exports;
// TODO POR ALGUNA RAZON GREET NO ES EJECTUTABLE
console.log( wasm_test.greet(1, 3));

