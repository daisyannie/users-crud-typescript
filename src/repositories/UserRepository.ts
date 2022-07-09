import { User } from "../domain/entities/User";

export abstract class UserRepository {
    abstract list(): User[]
}