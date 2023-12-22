import { customError } from '@/models/errorModels'
interface userSigninModel {
    username: string
    password: string
}

export type { userSigninModel }

// TODO ---------------------------------
interface userRepo {
    SignInAPI(payload: userSigninModel): Promise<[customError | null, any]>
    
    GetUsers(): any
}

export type { userRepo }
