import { faker } from '@faker-js/faker'

export const attendees = Array.from({ length: 156 }).map(() => {
    return {
        code: faker.number.int({ min: 1000, max: 20000 }),
        name: faker.person.fullName(),
        email: faker.internet.email().toLocaleLowerCase(),
        createdAt: faker.date.recent({ days: 30 }),
        checkedAt: faker.date.recent({ days: 1 })
    }
})