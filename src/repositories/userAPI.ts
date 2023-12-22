import { userRepo } from '@/repositories/user'
import { userSigninModel } from '@/repositories/user'
import { error, customError } from '@/models/errorModels'
import { request } from '@/utils/request/request'

class UserRepo implements userRepo {
    private _url: string
    private _req: request

    constructor(url: string, req: request) {
        this._url = url
        this._req = req
    }
    public async SignInAPI(payload: userSigninModel): Promise<[customError | null, any]> {
        console.log(this._url)
        if (payload.username == 'admin' && payload.password == '1234') return [null, { accesstoken: 'qwerty1234567890' }]
        else return [error.Error('signin fail'), '']
    }

    public async GetUsers() {
        return await this._req.Send({ url: `${this._url}/users`, method: 'get' })
    }
}

// const useUserRepo = new UserRepo()

export default UserRepo
