import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false

  constructor(private authService: AuthService, private router: Router) { }

  login(credentials: any) {
    this.authService.login(credentials).subscribe({
      next: (res: any) => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigateByUrl('profile')
      }, error: (httpError: any) => {
        console.log(httpError)
        this.invalidLogin = true
      }
    })
  }

  changeLogin() {
    this.invalidLogin = false
  }


  ngOnInit(): void {
  }

}
