import { loginModel } from '@/models/loginModels'
import userSrv from '@/services/user'
import userRepo from '@/repositories/user'
import UserRepo from '@/repositories/userAPI'
import storage from '@/utils/storage/storageLS'
import { request } from '@/utils/request/request'
import req from '@/utils/request/requestAxios'

// NOTE นำ Interface มาส้างเป็น Class ที่มีองประกอบตาม Interface
class UserSrv implements userSrv {
    // NOTE declare our property types
    private _userRepo: userRepo
    private _req: request

    // NOTE Constructure Of Class UserSrv
    constructor(userRepo: userRepo, req: request) {
        this._userRepo = userRepo
        this._req = req
    }

    // NOTE Method "signin" โดยจะมี Parameter เป็น Type "loginModel"
    // NOTE และจะ Return เป็น Type "Booleen"
    public async SignIn(payload: loginModel): Promise<boolean> {
        // TODO Validate Data

        // TODO Calling Repository
        const [err, val] = await this._userRepo.SignInAPI(payload)
        if (err != null) return false

        // storage.Clear()
        // NOTE SET Local Storage
        storage.Set('accesstoken', val.accesstoken)
        return true
    }

    // NOTE Method "signup"
    public async SignOut(): Promise<boolean> {
        storage.Clear()
        return true
    }

    // NOTE Method "signup"
    public async SignUp(): Promise<boolean> {
        return true
    }

    public async GetUsers() {
        return await this._req.Send({ url: 'https://jsonplaceholder.typicode.com/users', method: 'get' })
    }
}

// NOTE สร้าง Object จาก Class และ Return ออกไปสู่โลกภายนอก
export default new UserSrv(UserRepo, req)
