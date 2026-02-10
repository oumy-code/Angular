import { User } from '../core//models/user.model';
export const MOCK_USERS: User[] = [
    {
        id: 1,
        email: 'admin@hospital.com',
        password: 'admin123',
        fullName: 'Admin Hospital',
        role: 'SECRETAIRE'
    },
    {
        id: 2,
        email: 'medecin@hospital.com',
        password: 'medecin123',
        fullName: 'Dr. Dupont',
        role: 'MEDECIN'
    },
    {
        id: 3,
        email: 'patient@hospital.com',
        password: 'patient123',
        fullName: 'Jean Martin',
        role: 'PATIENT'
    },
    {
        id: 4,
        email: 'secretaire@hospital.com',
        password: 'secretaire123',
        fullName: 'Marie Dubois',
        role: 'SECRETAIRE'
    }
];