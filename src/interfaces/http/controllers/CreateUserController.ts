import { Request, Response } from "express";
import { CreateUser } from "../../../domain/useCases/CreateUser";
import { CreateUserRequest } from "../requests/CreateUserRequest";

export class CreateUserController {
    public async run(request: Request, response: Response) {
        const userRequest = new CreateUserRequest(request)

        await new CreateUser().run(userRequest)

        response.sendStatus(201)
    }
}