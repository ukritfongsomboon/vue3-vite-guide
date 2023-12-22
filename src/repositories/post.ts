import { customError } from '@/models/errorModels'

interface postModel {
    userId: number
    id: number
    title: string
    body: string
}
interface post {
    Get(): Promise<[customError | null, postModel[]]>
}

export type { post, postModel }
