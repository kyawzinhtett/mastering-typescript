interface Result<T> {
    data: T | null
    error: string | null
}

function fetch<T>(): Result<T> {
    return { data: null, error: null }
}

interface User {
    id: number
    username: string
}

interface Product {
    id: number
    title: string
}

let users = fetch<User>()
// users.data?.username

let products = fetch<Product>()
// products.data?.title
