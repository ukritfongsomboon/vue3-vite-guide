import { error } from '@/utils/error'
interface userSigninModel {
    username: string
    password: string
}

export type { userSigninModel }

// TODO ---------------------------------
interface userRepo {
    SignInAPI(payload: userSigninModel): Promise<[error, string]>
}

export default userRepo
