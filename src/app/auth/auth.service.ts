import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIdAuthenticated = false;

  get userIdAuthenticated() {
    return this._userIdAuthenticated;
  }
  constructor() { }

  login() {
    this._userIdAuthenticated = true;
  }

  logout() {
    this._userIdAuthenticated = false;
  }
}
