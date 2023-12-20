import { customError } from '@/utils/error'
interface userSigninModel {
    username: string
    password: string
}

export type { userSigninModel }

// TODO ---------------------------------
interface userRepo {
    SignInAPI(payload: userSigninModel): Promise<[customError, any]>
}

export default userRepo
