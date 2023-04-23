
export type User = {
    id: string
    avatar: string | undefined
    email: string
    full_name: string
    username: string
}

export type Message = {
    id: string
    message: string
    created_at: Date | string
    sender: User
    senderId: string
}