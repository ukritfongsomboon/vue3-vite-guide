import { storage } from '@/utils/storage/storage'

class StorageLocalStorage implements storage {
    public async Get(key: string): Promise<string | null> {
        return localStorage.getItem(key)
    }

    public async Set(key: string, value: string) {
        localStorage.setItem(key, value)
    }

    public async Remove(key: string) {
        localStorage.removeItem(key)
    }

    public async Clear() {
        localStorage.clear()
    }
}


export default new StorageLocalStorage()