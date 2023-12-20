interface localError extends Error {
    status: boolean
    message: string
    Error(msg: string): localError
    None(): localError
}
export type { localError }

class e implements localError {
    status: boolean
    message: string
    name: string

    constructor() {
        ;(this.status = false), (this.message = '')
        this.name = ''
    }

    public Error(msg: string): localError {
        const e = <localError>{
            status: true,
            message: msg,
        }
        return e
    }

    public None(): localError {
        const e = <localError>{
            status: false,
            message: '',
        }
        return e
    }
}

const error = new e()

export { error }
