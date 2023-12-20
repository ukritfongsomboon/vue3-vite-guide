import userRepo from '@/repositories/user'
import { userSigninModel } from '@/repositories/user'
import { error, customError } from '@/utils/error'

class UserRepo implements userRepo {
    public async SignInAPI(payload: userSigninModel): Promise<[customError, any]> {
        if (payload.username == 'admin' && payload.password == '1234') return [error.None(), { accesstoken: 'qwerty1234567890' }]
        else return [error.Error('signin fail'), '']
    }
}

const useUserRepo = new UserRepo()

export default useUserRepo
