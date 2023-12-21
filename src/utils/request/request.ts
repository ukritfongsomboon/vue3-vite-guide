interface payload {
    url: string
    method: string
    headers?: any
    params?: any
    body?: any
}

interface request {
    Send(payload: payload): Promise<any>
}

export type { request ,payload}
