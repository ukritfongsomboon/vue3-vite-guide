import { storage } from '@/repositories/storage'

class StorageLocalStorageRepo implements storage {
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

const useStorageLSRepo = new StorageLocalStorageRepo()
export default useStorageLSRepo