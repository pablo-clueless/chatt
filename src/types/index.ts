
export type User = {
    _id: string
    avatar: string | undefined
    email: string
    full_name: string
    username: string
}

export type Post = {
    _id: string
    created_at: Date | string
    created_by: User
    images: string[]
    post: string
    likes: number
}

export type Comment = {
    _id: string
    created_at: Date | string
    created_by: User
    comment: string
}

export type Message = {
    _id: string
    message: string
    created_at: Date | string
    created_by: User
}

export type Notification = {
    _id: string
    created_at: Date | string
    created_by: User
    notification: string
}