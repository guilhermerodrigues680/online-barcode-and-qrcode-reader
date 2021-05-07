package codereader

import (
	"bytes"
	"errors"
	"fmt"
	"image"
	"syscall/js"
	"time"

	_ "image/jpeg" // RegisterFormat jpeg
	_ "image/png"  // RegisterFormat png

	"github.com/makiuchi-d/gozxing"
	"github.com/makiuchi-d/gozxing/oned"
)

// newJsError is helper to make Js Errors
func newJsError(err error) js.Value {
	return js.Global().Get("Error").New(err.Error())
}

// Promise is a wrapped Go function to be called by JavaScript
// in javascript returns a promise
func Promise() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		return js.Global().Get("Promise").New(js.FuncOf(func(this js.Value, args []js.Value) interface{} {
			resolve := args[0]
			reject := args[1] // Commented out because this Promise never fails

			go func() {
				time.Sleep(2 * time.Second)
				if time.Now().Unix()%2 == 0 {
					resolve.Invoke("Se passaram 5 segundos")
				} else {
					reject.Invoke(newJsError(errors.New("Deu ruim haha")))
				}
			}()

			// The handler of a Promise doesn't return any value
			return nil
		}))
	})
}

// ReadByteArr is a wrapped Go function to be called by JavaScript
func ReadByteArr() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		return js.Global().Get("Promise").New(js.FuncOf(func(this js.Value, argsPromise []js.Value) interface{} {

			go func() {
				resolve := argsPromise[0]
				reject := argsPromise[1]

				defer func() {
					if err := recover(); err != nil {
						fmt.Println("panic occurred:", err)
						// funcReturn = "Erro!"
						reject.Invoke(newJsError(errors.New("Erro!")))
					}
				}()

				// read the JavaScript call and adapt to golang
				array := args[0]
				buf := make([]byte, array.Get("length").Int())
				_ = js.CopyBytesToGo(buf, array)

				// run the golang function with adapted javascript args
				result, err := decodeByteArr(buf)
				if err != nil {
					fmt.Println(err)
					reject.Invoke(newJsError(err))
					return
				}

				fmt.Printf("%#v\n", result)

				resObj := map[string]interface{}{
					"text": result.GetText(),
					"resultPoints": []interface{}{
						map[string]interface{}{
							"x": result.GetResultPoints()[0].GetX(),
							"y": result.GetResultPoints()[0].GetY(),
						},
						map[string]interface{}{
							"x": result.GetResultPoints()[1].GetX(),
							"y": result.GetResultPoints()[1].GetY(),
						},
					},
				}

				// adapt golang response to javascript
				resolve.Invoke(resObj)
			}()

			// The handler of a Promise doesn't return any value
			return nil
		}))
	})
}

// ReadByteArr is a wrapped Go function to be called by JavaScript
// func ReadByteArr() js.Func {
// 	return js.FuncOf(func(this js.Value, args []js.Value) (funcReturn interface{}) {
// 		defer func() {
// 			if err := recover(); err != nil {
// 				fmt.Println("panic occurred:", err)
// 				funcReturn = "Erro!"
// 			}
// 		}()

// 		go func() {
// 			time.Sleep(5 * time.Second)

// 			// read the JavaScript call and adapt to golang
// 			array := args[0]
// 			buf := make([]byte, array.Get("length").Int())
// 			_ = js.CopyBytesToGo(buf, array)

// 			// run the golang function with adapted javascript args
// 			str, err := decodeByteArr(buf)
// 			if err != nil {
// 				fmt.Println(err)
// 				// return err.Error()
// 			}

// 			fmt.Println(str)

// 			// adapt golang response to javascript
// 			// return str
// 		}()

// 		// // time.Sleep(5 * time.Second)

// 		// // read the JavaScript call and adapt to golang
// 		// array := args[0]
// 		// buf := make([]byte, array.Get("length").Int())
// 		// _ = js.CopyBytesToGo(buf, array)

// 		// // run the golang function with adapted javascript args
// 		// str, err := decodeByteArr(buf)
// 		// if err != nil {
// 		// 	// fmt.Println(err)
// 		// 	return err.Error()
// 		// }

// 		// fmt.Println(str)

// 		// // adapt golang response to javascript
// 		// return str
// 		return nil
// 	})
// }

func decodeByteArr(bf []byte) (*gozxing.Result, error) {
	bfr := bytes.NewReader(bf)
	img, _, err := image.Decode(bfr)
	if err != nil {
		return nil, err
	}
	// fmt.Println("formatName:", formatName, img.Bounds())

	// prepare BinaryBitmap
	bmp, err := gozxing.NewBinaryBitmapFromImage(img)
	if err != nil {
		return nil, err
	}

	// decode image
	r := oned.NewITFReader()
	// hints := map[gozxing.DecodeHintType]interface{}{gozxing.DecodeHintType_TRY_HARDER: true}
	hints := map[gozxing.DecodeHintType]interface{}{}

	result, err := r.Decode(bmp, hints)
	if err == nil {
		return result, nil
	} else if err.Error() == "NotFoundException" {
		// pass
		// fmt.Println("NotFoundException Erro")
		// logger.Error("NotFoundException Erro")
	} else {
		// outro erro
		fmt.Println("Outro erro: ", err)
	}

	// Se o ITF nao encontrar, tenta o formato EAN13

	rEAN := oned.NewEAN13Reader()
	result, err = rEAN.Decode(bmp, hints)
	if err != nil {
		return result, err
	}

	return result, nil
}
