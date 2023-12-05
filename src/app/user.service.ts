import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any[] = [];

  registerUser(user: any) {
    this.users.push(user);
  }

  loginUser(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    return user;
  }
}
