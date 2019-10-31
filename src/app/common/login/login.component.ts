import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string
  pageTitle = 'Log In'
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName
      const password = loginForm.form.value.password
      this.authService.login(userName, password)
      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl)
      } else {
        this.router.navigate(['/home'])
      }
    } else {
      this.errorMessage = 'Enter a valid user name and password'
    }
  }
}
