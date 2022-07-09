import { User } from "../../domain/entities/User";
import { UserRepository } from "../../repositories/UserRepository"

export class MemoryUserRepository implements UserRepository {
    private static instance: MemoryUserRepository
    private users: User[] = []

    public static getInstance(): MemoryUserRepository {
        if (!MemoryUserRepository.instance) {
            MemoryUserRepository.instance = new MemoryUserRepository()
        }
        return MemoryUserRepository.instance
    }

    public insert(user: User): void {
        this.users.push(user)
    }
    public list(): User[] {
        return this.users
    }

}