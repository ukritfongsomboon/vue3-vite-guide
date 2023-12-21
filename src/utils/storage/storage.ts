interface storage {
    Get(key: string): Promise<string | null>
    Set(key: string, value: string): Promise<any>
    Remove(key: string): Promise<any>
    Clear(): Promise<any>
    // IsExiste(key: string): Promise<boolean>
}

export type { storage }
