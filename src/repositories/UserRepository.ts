import { injectable } from "inversify";
import { User } from "../domain/entities/User";

@injectable()
export abstract class UserRepository {
    abstract list(): User[]
    abstract create(user: User): void
}