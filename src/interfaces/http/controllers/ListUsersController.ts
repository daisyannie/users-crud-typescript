import { Request, Response } from "express";
import { ListUsers } from "../../../domain/useCases/ListUsers";

export class ListUsersController {
    public async run(_request: Request, response: Response) {
        const users = await new ListUsers().run()
        response.send(users)
    }
}