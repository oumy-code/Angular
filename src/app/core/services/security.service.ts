import { Injectable } from '@angular/core';
import { UserLoginRequest, UserLoginResponse } from '../models/user.model';
import { MOCK_USERS } from '@mocks';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'current_user';

  constructor() {}

  login(userLoginRequest: UserLoginRequest): UserLoginResponse | null {
    const users = [...MOCK_USERS];

    const user = users.find(
      u =>
        u.email === userLoginRequest.email.trim() &&
        u.password === userLoginRequest.password.trim()
    );

    if (!user) {
      return null;
    }

    const userLoginResponse: UserLoginResponse = {
      user: user,
      token: 'fake-jwt-token-' + user.id
    };

    this.saveLocalStorage(userLoginResponse);

    return userLoginResponse;
  }

  private saveLocalStorage(userLoginResponse: UserLoginResponse): void {
    localStorage.setItem(this.TOKEN_KEY, userLoginResponse.token!);
    localStorage.setItem(
      this.USER_KEY,
      JSON.stringify(userLoginResponse.user)
    );
  }
  get currentUser(): UserLoginResponse | null {
  
    const userJson = localStorage.getItem(this.USER_KEY);
    if ( userJson) {
      return {
       
        user: JSON.parse(userJson)
      };
    }
    return null;
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
}
