import { loginModel } from '@/models/loginModels'
import { request } from '@/utils/request/request'
import { storage } from '@/utils/storage/storage'

// NOTE Interface แสดงองประกอบของ UserSrv ที่สามารถใช้งานได้
interface userSrv {
    SignIn(payload: loginModel, request: request, str: storage): Promise<boolean>
    SignOut(): Promise<boolean>
    SignUp(): Promise<boolean>

    GetUsers(): any
}

export type { userSrv }
