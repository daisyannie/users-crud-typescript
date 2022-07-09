import { Request } from "express"

export class CreateUserRequest {
    public id: number
    public name: string
    public dateBirth: Date

    constructor(request: Request) {
        const { id, name, birthDate } = request.body
        this.id = id
        this.name = name
        this.dateBirth = new Date(birthDate)
    }
}