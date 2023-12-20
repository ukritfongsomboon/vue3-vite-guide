import userRepo from '@/repositories/user'
import { userSigninModel } from '@/repositories/user'
import { error, localError } from '@/utils/error'

class UserRepo implements userRepo {
    public async SignInAPI(payload: userSigninModel): Promise<[localError, string]> {
        if (payload.username == 'admin' && payload.password == '1234') return [error.Error('signin fail'), '']
        else return [error.None(), '']
    }
}

const useUserRepo = new UserRepo()

export default useUserRepo
