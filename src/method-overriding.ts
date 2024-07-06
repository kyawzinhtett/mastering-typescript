class People {
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

class Teacher extends People {
    override get fullName() {
        return 'Professor ' + super.fullName
    }
}

let teacher = new Teacher('John', 'Doe')

console.log(teacher.fullName)
