import { loginModel } from '@/models/loginModels'
import userSrv from '@/services/user'
import userRepo from '@/repositories/user'
import UserRepo from '@/repositories/userAPI'

// NOTE นำ Interface มาส้างเป็น Class ที่มีองประกอบตาม Interface
class UserSrv implements userSrv {
    // NOTE declare our property types
    private _userRepo: userRepo

    // NOTE Constructure Of Class UserSrv
    constructor(userRepo: userRepo) {
        this._userRepo = userRepo
    }

    // NOTE Method "signin" โดยจะมี Parameter เป็น Type "loginModel"
    // NOTE และจะ Return เป็น Type "Booleen"
    public async SignIn(payload: loginModel): Promise<boolean> {
        const [err, val] = await this._userRepo.SignInAPI(payload)
        if (err.status) return false
        else return true
    }

    // NOTE Method "signup"
    public async SignUp(): Promise<boolean> {
        return true
    }
}

// NOTE สร้าง Object จาก Class และ Return ออกไปสู่โลกภายนอก
const useUserSrv = new UserSrv(UserRepo)

// NOTE Return Srv

export { useUserSrv }
