interface userRepo {
    Get(): Promise<string>
    Post(): Promise<string>
    Put(): Promise<string>
    Delete(): Promise<string>
}

export default userRepo
