import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };

  constructor(private userService: UserService) {}

  onSubmit() {
    const user = this.userService.loginUser(
      this.user.username,
      this.user.password
    );
    if (user) {
      console.log('Login effettuato con successo');
    } else {
      console.log('Nome utente o password errati');
    }
  }
}
