import userRepo from '@/repositories/user'

class UserRepo implements userRepo {
    public async Get(): Promise<string> {
        return 'Get'
    }
    public async Post(): Promise<string> {
        return 'Post'
    }
    public async Put(): Promise<string> {
        return 'Put'
    }
    public async Delete(): Promise<string> {
        return 'Delete'
    }
}

const useUserRepo = new UserRepo()

export default useUserRepo
