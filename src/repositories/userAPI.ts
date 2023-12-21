import {userRepo} from '@/repositories/user'
import { userSigninModel } from '@/repositories/user'
import { error, customError } from '@/models/errorModels'

class UserRepo implements userRepo {
    public async SignInAPI(payload: userSigninModel): Promise<[customError | null, any]> {
        if (payload.username == 'admin' && payload.password == '1234') return [null, { accesstoken: 'qwerty1234567890' }]
        else return [error.Error('signin fail'), '']
    }
}

// const useUserRepo = new UserRepo()

export default UserRepo
