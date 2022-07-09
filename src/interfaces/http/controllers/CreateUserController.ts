import { Request, Response } from "express";
import { CreateUser } from "../../../domain/useCases/CreateUser";
import { CreateUserRequest } from "../requests/CreateUserRequest";

export class CreateUserController {
    constructor(
        private readonly createUser: CreateUser
    ) {}
    public async run(request: Request, response: Response) {
        const userRequest = new CreateUserRequest(request)
        await this.createUser.run(userRequest)

        response.sendStatus(201)
    }
}