export type User = {
    full_name: string
    email: string
    phone: string 
    avatar?: string
    address: string
    role: Role
}

export enum Role {
    USER = "User",
    ADMIN = "Admin"
}