## 学んだことメモ

### useEffect

- 第二引数に指定した state が変化すると useEffect が呼ばれる
- 第二引数に何も指定しないと最初のレンダリングと全ての state 変化時に useEffect は呼ばれる
- 第二引数に[]を指定すると state 変化は無視するので最初のレンダリング時のみ useEffect が呼ばれる
- return にはこのページが破棄されるタイミングで実行する関数を指定できる
