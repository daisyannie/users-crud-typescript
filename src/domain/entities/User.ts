export class User {
    public id: number
    public name: string
    public birthDate: Date

    constructor(id: number, name: string, birthDate: Date) {
        this.id = id
        this.name = name
        this.birthDate = birthDate
    }
    
}