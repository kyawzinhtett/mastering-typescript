class ArrUtils {
    static wrapInArray<T>(value: T) {
        return [value]
    }
}

let arr = ArrUtils.wrapInArray(1)
let arr2 = ArrUtils.wrapInArray(true)
