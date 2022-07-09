import { MemoryUserRepository } from "../../infra/memory/MemoryUserRepository";
import { CreateUserRequest } from "../../interfaces/http/requests/CreateUserRequest";
import { User } from "../entities/User";

export class CreateUser {
    public async run(payloadUser: CreateUserRequest): Promise<void> {
        const user = new User(payloadUser.id, payloadUser.name, payloadUser.dateBirth)

        MemoryUserRepository.getInstance().insert(user)
    }
}