import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "Felix"
  password: string = "PSWD"
  errorMessage='Invalid Credentials'
  invalidLogin=false

  constructor(private router:Router){}

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.username === "Haudi" && this.password === 'Schaudi') {
      // Redirect to Welcome Page
      this.router.navigate(['welcome'])
      this.invalidLogin = false;
    } else {

    }
  }
}
