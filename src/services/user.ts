import { loginModel } from '@/models/loginModels'
import { request } from '@/utils/request/request'

// NOTE Interface แสดงองประกอบของ UserSrv ที่สามารถใช้งานได้
interface userSrv {
    SignIn(payload: loginModel, request: request): Promise<boolean>
    SignOut(): Promise<boolean>
    SignUp(): Promise<boolean>

    GetUsers(): any
}

export default userSrv
