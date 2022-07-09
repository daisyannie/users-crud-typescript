import { Request, Response } from "express";
import { ListUsers } from "../../../domain/useCases/ListUsers";

export class ListUsersController {
    constructor(
        private readonly listUsers: ListUsers
    ) {}
    public async run(_request: Request, response: Response) {
        const users = await this.listUsers.run()
        response.send(users)
    }
}