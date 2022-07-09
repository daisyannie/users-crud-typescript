import { MemoryUserRepository } from "../../infra/memory/MemoryUserRepository";
import { User } from "../entities/User";

export class ListUsers {
    public async run(): Promise<User[]> {
        return MemoryUserRepository.getInstance().list()
    }
}