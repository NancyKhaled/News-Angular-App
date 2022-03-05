import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  invalidEmail: boolean = false
  invalidAge: boolean = false
  invalidPassword: boolean = false
  invalidPhoneNumber: boolean = false
  msg: string = ""

  constructor(private authService: AuthService, private router: Router) { }

  signUp(credentials: any) {
    this.authService.signUp(credentials).subscribe({
      next: (res: any) => {

        //console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigateByUrl('profile')

      }, error: (httpError: any) => {
        //console.log(httpError)
        if (httpError.error.code) {
          this.invalidEmail = true

        } else if (httpError.error.errors.age) {
          this.invalidAge = true
          this.msg = httpError.error.errors.age.message

        } else if (httpError.error.errors.password) {
          this.invalidPassword = true
          this.msg = httpError.error.errors.password.message
          
        } else if (httpError.error.errors.phone) {
          this.invalidPhoneNumber = true
          this.msg = httpError.error.errors.phone.message
        }
      }
    })
  }

  changeEmail() {
    this.invalidEmail = false
  }

  changeAge() {
    this.invalidAge = false
  }

  changePassword() {
    this.invalidPassword = false
  }

  changePhoneNumber() {
    this.invalidPhoneNumber = false
  }

  ngOnInit(): void {
  }

}
