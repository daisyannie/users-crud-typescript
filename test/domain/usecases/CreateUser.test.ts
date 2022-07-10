import { CreateUser } from "../../../src/domain/useCases/CreateUser"
import { MemoryUserRepository } from "../../../src/infra/memory/MemoryUserRepository"

describe('when a new user is created', () => {
    test('should call repository to save', () => {
        const subject = new CreateUser()
        subject.run({ id: 1, name: 'Mary', dateBirth: new Date('1988-08-08') })

        const users = MemoryUserRepository.getInstance().list()
        expect(users.length).toBe(1)
        expect(users[0].id).toBe(1)
        expect(users[0].name).toBe('Mary')
        expect(users[0].birthDate.getDay).toBe(new Date('1988-08-08').getDay)
        expect(users[0].birthDate.getMonth).toBe(new Date('1988-08-08').getMonth)
        expect(users[0].birthDate.getFullYear).toBe(new Date('1988-08-08').getFullYear)
    })
})