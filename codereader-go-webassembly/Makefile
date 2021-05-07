MODULE=codereader
MAIN_PATH=./cmd/wasm/main.go

.PHONY: default
default: build

.PHONY: clearbin
clearbin:
	rm -rf ./bin

.PHONY: build
build: clearbin
	GOOS=js GOARCH=wasm go build -v -o ./bin/$(MODULE).wasm $(MAIN_PATH)

.PHONY: cross
cross: clearbin
	go build -v -o ./bin/$(MODULE) $(MAIN_PATH)

.PHONY: run
run: cross
	./bin/$(MODULE)