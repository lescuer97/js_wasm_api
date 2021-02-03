use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub fn greet(a: i8, b:i8) -> i8  {
   let result = a + b;
   return result;
}
