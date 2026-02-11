import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserLoginRequest, UserLoginResponse } from '../models/user.model';
import { MOCK_USERS } from '@mocks';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'current_user';

  constructor() {}

  // 🔹 Login maintenant renvoie un Observable
  login(userLoginRequest: UserLoginRequest): Observable<UserLoginResponse | null> {
    const users = [...MOCK_USERS];

    const user = users.find(
      u =>
        u.email === userLoginRequest.email.trim() &&
        u.password === userLoginRequest.password.trim()
    );

    if (!user) {
      return of(null); // on renvoie un Observable avec null
    }

    const userLoginResponse: UserLoginResponse = {
      user: user,
      token: 'fake-jwt-token-' + user.id
    };

    this.saveLocalStorage(userLoginResponse);

    return of(userLoginResponse); // on renvoie un Observable
  }

  private saveLocalStorage(userLoginResponse: UserLoginResponse): void {
    localStorage.setItem(this.TOKEN_KEY, userLoginResponse.token!);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userLoginResponse.user));
  }

  // 🔹 Récupération de l'utilisateur connecté en Observable
  getCurrentUser(): Observable<UserLoginResponse | null> {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson) {
      return of({ user: JSON.parse(userJson) });
    }
    return of(null);
  }

  // 🔹 Vérification de l'authentification en Observable
  isAuthenticated(): Observable<boolean> {
    return of(!!localStorage.getItem(this.TOKEN_KEY));
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
}
