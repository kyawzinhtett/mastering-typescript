interface Stuff {
    name: string
    price: number
}

class Store<T> {
    protected _objects: T[] = []

    add(obj: T): void {
        this._objects.push(obj)
    }
}

// Pass on the generic type parameter
class compressibleStore<T> extends Store<T> {
    compress() {}
}

let store = new compressibleStore<Stuff>()
store.add({ name: 'test', price: 1000 })
store.compress()

// Restrict the generic type parameter
class searchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find((obj) => obj.name === name)
    }
}

let searchStore = new searchableStore<Stuff>()
searchStore.find('test')

// Fix the generic type parameter
class productStore extends Store<Stuff> {
    filterByCategory(category: string): [string] {
        return [category]
    }
}
