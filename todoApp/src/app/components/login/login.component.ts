import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticaionService} from "../../services/hardcoded-authenticaion.service";

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

  constructor(private router:Router, private hardcodedAuthenticaionService: HardcodedAuthenticaionService){}

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.hardcodedAuthenticaionService.authenticate(this.username,this.password)){
      // Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin=true

    }
  }
}
