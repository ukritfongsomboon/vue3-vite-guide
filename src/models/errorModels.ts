// NOTE สร้าง Interface Error Format ที่จะใช้สำหรับ Type Local Error
interface customError extends Error {
    status: boolean
    message: string
    Error(msg: string): customError
    None(): customError
}
// NOTE Export Type Error
export type { customError }

// NOTE สร้าง Class ของ Error จาก Interface
class e implements customError {
    status: boolean
    message: string
    name: string

    constructor() {
        ;(this.status = false), (this.message = '')
        this.name = ''
    }

    public Error(msg: string): customError {
        const e = <customError>{
            status: true,
            message: msg,
        }
        return e
    }

    public None(): customError {
        const e = <customError>{
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
