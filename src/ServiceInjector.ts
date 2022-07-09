import { Container } from "inversify"
import { MemoryUserRepository } from "./infra/memory/MemoryUserRepository"
import { UserRepository } from "./repositories/UserRepository"

export class ServiceInjector {
    public static createContainer(): Container {
        const container = new Container()

        container.bind(UserRepository).to(MemoryUserRepository).inSingletonScope()

        return container
    }
}