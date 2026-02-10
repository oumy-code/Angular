export interface User {
    id: number;
    email: string;
    password: string;
    role: userRole;
    fullName: string;
}

type userRole = 'PATIENT' | 'MEDECIN' | 'SECRETAIRE';

export interface UserLoginResponse {
    user: User;
    token?: string;
}
export interface UserLoginRequest {
    email: string;
    password: string;
    
}