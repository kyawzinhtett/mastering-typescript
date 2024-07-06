class Human {
    constructor(
        public firstName: string,
        public lastName: string,
    ) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }

    walk() {
        console.log('Walking')
    }
}

class Pupil extends Human {
    constructor(
        public studentId: number,
        firstName: string,
        lastName: string,
    ) {
        super(firstName, lastName)
    }

    takeTest() {
        console.log('Taking a test')
    }
}

class Professor extends Human {
    override get fullName() {
        return 'Professor ' + super.fullName
    }
}

class Principal extends Human {
    override get fullName() {
        return 'Principal ' + super.fullName
    }
}

printNames([
    new Pupil(1, 'John', 'Doe'),
    new Professor('Logan', 'Roy'),
    new Principal('Merry', 'James'),
])

function printNames(people: Human[]) {
    for (let person of people) console.log(person.fullName)
}
