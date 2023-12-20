// NOTE สร้าง Interface Error Format ที่จะใช้สำหรับ Type Local Error
interface localError extends Error {
    status: boolean
    message: string
    Error(msg: string): localError
    None(): localError
}
// NOTE Export Type Error
export type { localError }

// NOTE สร้าง Class ของ Error จาก Interface
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

// NOTE Create Error Object
const error = new e()

// NOTE Export Error Object
export { error }
