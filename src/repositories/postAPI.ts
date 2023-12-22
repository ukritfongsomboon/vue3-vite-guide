import { post, postModel } from '@/repositories/post'
import { customError } from '@/models/errorModels'
import { request } from '@/utils/request/request'

class postRepo implements post {
    private _url: string
    private _req: request

    constructor(url: string, req: request) {
        this._url = url
        this._req = req
    }
    public async Get(): Promise<[customError | null, postModel[]]> {
        return await this._req.Send({ url: `${this._url}/users`, method: 'get' })
    }
}

export default postRepo
