import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    gender: new FormControl('male'),
    image: new FormControl(null),
    bio: new FormControl(''),
    username: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.registerForm.value);
    console.log('Form correttamente inviato');
    this.registerForm.reset();
  }
}
