class KeyValuePair<K, V> {
    constructor(
        public key: K,
        public value: V,
    ) {}
}

let pair = new KeyValuePair<string, string>('hello', 'world')
let pair2 = new KeyValuePair(1, false)
