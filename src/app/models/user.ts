import { Gender } from './enums';

export class SimpleUser {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    gender: Gender;
    displayName: string;
    isAdministrator: boolean;
    isBlocked: boolean;
    isDisabled: boolean;
}

export class User extends SimpleUser {
    height: number;
    weight: number;
    email: string;
    birthDate: Date;
    apiKey: string;
}

export class AuthenticatedUser extends User {
    lastPasswordChangeDate: Date;
    requireNewPasswordAtLogon: boolean;
    numberOfFailedAttempts: number;
}
