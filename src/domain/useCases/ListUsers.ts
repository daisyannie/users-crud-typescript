import { inject, injectable } from "inversify";
import { UserRepository } from "../../repositories/UserRepository";
import { User } from "../entities/User";

@injectable()
export class ListUsers {
    constructor(
        private readonly userRepository: UserRepository
    ) {}
    
    public async run(): Promise<User[]> {
        return this.userRepository.list()
    }
}