import { loginModel } from '@/models/loginModels'

// NOTE Interface แสดงองประกอบของ UserSrv ที่สามารถใช้งานได้
interface userSrv {
    SignIn(payload: loginModel): Promise<boolean>
    SignOut():Promise<boolean>
    SignUp(): Promise<boolean>
}

export default userSrv
