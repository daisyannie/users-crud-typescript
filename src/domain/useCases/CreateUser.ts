import { inject, injectable } from "inversify";
import { CreateUserRequest } from "../../interfaces/http/requests/CreateUserRequest";
import { UserRepository } from "../../repositories/UserRepository";
import { User } from "../entities/User";

@injectable()
export class CreateUser {
    constructor(
        private readonly userRepository: UserRepository
    ) {}
    
    public async run(payloadUser: CreateUserRequest): Promise<void> {
        const user = new User(payloadUser.id, payloadUser.name, payloadUser.dateBirth)

        this.userRepository.create(user)
    }
}