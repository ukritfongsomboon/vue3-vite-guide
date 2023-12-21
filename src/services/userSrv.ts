import { loginModel } from '@/models/loginModels'
import { userSrv } from '@/services/user'
import { request } from '@/utils/request/request'
import { userRepo } from '@/repositories/user'

// import UserRepo from '@/repositories/userAPI'
// import str from '@/utils/storage/storageLS'
// import req from '@/utils/request/requestAxios'
import { storage } from '@/utils/storage/storage'

// NOTE นำ Interface มาส้างเป็น Class ที่มีองประกอบตาม Interface
class UserSrv implements userSrv {
    // NOTE declare our property types
    private _userRepo: userRepo
    private _req: request
    private _str: storage

    // NOTE Constructure Of Class UserSrv
    constructor(userRepo: userRepo, req: request, str: storage) {
        this._userRepo = userRepo
        this._req = req
        this._str = str
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
        this._str.Set('accesstoken', val.accesstoken)
        return true
    }

    // NOTE Method "signup"
    public async SignOut(): Promise<boolean> {
        this._str.Clear()
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
export default UserSrv
// export default new UserSrv(UserRepo, req, str)
