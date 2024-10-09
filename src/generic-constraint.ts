interface Book {
    title: string
}

function echo<T extends Book>(value: T): T {
    return value
}

echo({ title: 'The Brothers Karamazov' })
