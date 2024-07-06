abstract class Shape {
    constructor(public color: string) {}

    abstract render(): void
}

class Circle extends Shape {
    constructor(
        public radius: string,
        color: string,
    ) {
        super(color)
    }

    override render(): void {
        console.log('Renderring a circle')
    }
}

let circle = new Circle('10', 'red')

circle.render()
