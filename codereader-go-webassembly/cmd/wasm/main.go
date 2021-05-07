package main

import (
	"codereader"
	"fmt"
	"syscall/js"
)

type Pessoa struct {
	Nome string `json:"nome"`
}

func main() {
	fmt.Println("Go WebAssembly initializing")

	js.Global().Set("mygoapp", make(map[string]interface{}))
	mygoapp := js.Global().Get("mygoapp")
	// mygoapp.Set("myFunc", myFunc())
	// mygoapp.Set("myFuncErr", myFuncErr())
	mygoapp.Set("readByteArr", codereader.ReadByteArr())
	mygoapp.Set("promis", codereader.Promise())

	fmt.Println("Go WebAssembly initialized")
	<-make(chan bool)
}

// func myFunc() js.Func {
// 	return js.FuncOf(func(this js.Value, args []js.Value) (g interface{}) {
// 		fmt.Println("Ola!")
// 		return "Ola!"
// 	})
// }

// func myFuncErr() js.Func {
// 	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
// 		p := Pessoa{Nome: "Joao"}
// 		fmt.Println(p)
// 		var inInterface map[string]interface{}
// 		inrec, _ := json.Marshal(p)
// 		json.Unmarshal(inrec, &inInterface)
// 		return inInterface
// 	})
// }
