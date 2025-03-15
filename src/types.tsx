export type Role = "admin" | "editor" | "viewer" | null;

export interface User {
    username: string;
    role: Role;
}