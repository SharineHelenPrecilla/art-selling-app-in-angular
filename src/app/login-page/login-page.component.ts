import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'] // Fix the typo here
})
export class LoginPageComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: 'Sharine', // Assign default values
    email: 'sharineprince@gmail.com',
    password: '123'
  };
  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers'); // Fix the key here
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: 'defaultUsername', // Reset default values after signup
      email: 'defaultEmail@example.com',
      password: 'defaultPassword'
    };
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(
      (m) => m.userName == this.loginObj.userName && m.password == this.loginObj.password
    );
    if (isUserExist != null) {
      alert('User Login Successfully!');
      this.goToHomePage();
    } else {
      alert('Wrong Credentials');
      this.goToHomePage();
    }
  }
  goToHomePage() {
    this.router.navigateByUrl('/'); // Replace '/' with the actual route of your home page
  }
}
