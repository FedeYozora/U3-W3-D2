import { Component } from '@angular/core';

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

  onSubmit() {
    console.log('User email: ', this.user.username);
    console.log('User password: ', this.user.password);
  }
}
