import { injectable } from "inversify";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../repositories/UserRepository"

@injectable()
export class MemoryUserRepository implements UserRepository {
    private users: User[] = []

    public create (user: User): void {
        this.users.push(user)
    }
    public list(): User[] {
        return this.users
    }

}