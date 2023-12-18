interface User {
    userId: number
    firstName: string
    lastname: string
    phone: string
}

interface Users extends Array<User> {}
// OR
// interface Users {
//     [index: number]: User
// }

export type { User ,Users}
