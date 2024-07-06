type Employee = {
    id: number
    name: string
    retire: (date: Date) => void
}

const employee: Employee = {
    id: 1,
    name: 'KZH',
    retire: (date: Date) => {
        console.log(date)
    },
}
