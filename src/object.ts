const employee: {
    id: number,
    name: string
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'KZH',
    retire: (date: Date) => {
        console.log(date);
    }
}