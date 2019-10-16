import { Component, OnInit } from '@angular/core'
import { NgForm, NgModel } from '@angular/forms'
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'
import { faInfoCircle, faCircle } from '@fortawesome/free-solid-svg-icons'
import { TokenService } from './token.service'
import { ConfigService } from './config/config.service'
declare var __env: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tokenClient'
  faInfoCircle = faInfoCircle
  faCircle = faCircle
  selectedTab = 0
  favorites = []
  favoriteSelected = ''
  apiUrls: []
  grantType = 'password'
  apiUrl = ''
  clientId = 'JS'
  clientSecret = 'secret'
  username = ''
  passwordValue = ''
  useRefreshTokenValue = ''
  useRefreshToken = false
  useClientAuthentication = false
  bodyData = ''
  postError = false
  postErrorMessage = ''
  resourceData: ''
  tokenFullWrapper = {
    access_token: '',
    token_type: '',
    expires_in: null,
    token_issued: '',
    token_expires: '',
    role: '',
    claims: '',
    settings: '',
    apps: '',
    refresh_token: ''
  }
  authorization = 'Authorization bearer '
  constructor(private configService: ConfigService, private tokenService: TokenService) {}
  ngOnInit(): void {
    this.configService.getConfig().subscribe(
      (result: Environments) => {
        switch (__env.name) {
          case 'dev':
            this.apiUrls = result.dev.apiUrls
            break
          case 'stag':
            this.apiUrls = result.stag.apiUrls
            break
          case 'prod':
            this.apiUrls = result.prod.apiUrls
            break
        }
      },
      error => {}
    )
  }
  useRefreshTokenChange() {
    if (this.useRefreshToken) {
      this.grantType = 'refresh_token'
    } else {
      this.grantType = 'password'
    }
  }
  grantTypeChanged() {
    this.useRefreshToken = this.grantType === 'refresh_token'
  }
  favoriteChanged() {
    console.log(this.favoriteSelected)
    this.apiUrl = this.favoriteSelected + '/token'
  }
  onSubmitGetToken(form: NgForm) {
    // console.log('in onSubmit:', form.valid)
    this.clearTokenFullWrapper()
    if (form.valid) {
      this.postError = false
      this.bodyData = `grant_type=${this.grantType}&username=${this.username}&password=${this.passwordValue}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
      this.tokenService.getToken(this.apiUrl, this.bodyData).subscribe(
        result => {
          console.log('success on component', result)
          this.tokenFullWrapper = result
          this.onTabChanged({ index: 1 })
        },
        error => {
          this.onHttpError(error)
        }
      )
    } else {
      this.postError = true
      this.postErrorMessage = 'Please fix the above errors.'
    }
  }
  onSubmitGetData(form: NgForm) {
    // console.log('in onSubmit:', form.valid)
    if (form.valid) {
      this.postError = false
      /* this.bodyData = `grant_type=${this.grantType}&username=${this.username}&password=${this.passwordValue}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
      this.tokenService.getToken(this.apiUrl, this.bodyData).subscribe(
        result => {
          console.log('success on component', result)
          this.tokenFullWrapper = result
          this.onTabChanged({ index: 1 })
        },
        error => {
          this.onHttpError(error)
        }
      ) */
    } else {
      this.postError = true
      this.postErrorMessage = 'Please fix the above errors.'
    }
  }
  onHttpError(errorResponse: any) {
    console.error('error: ' + errorResponse)
    this.postError = true
    this.postErrorMessage = errorResponse
  }
  onTabChanged(event) {
    this.selectedTab = event.index
  }
  useTokenGetData() {
    this.onTabChanged({ index: 2 })
    this.authorization += this.tokenFullWrapper.access_token
  }
  useRefreshTokenGetToken() {
    this.onTabChanged({ index: 0 })
  }
  private clearTokenFullWrapper() {
    this.tokenFullWrapper = {
      access_token: '',
      token_type: '',
      expires_in: null,
      token_issued: '',
      token_expires: '',
      role: '',
      claims: '',
      settings: '',
      apps: '',
      refresh_token: ''
    }
  }
}
export class Environments {
  dev: any
  stag: any
  prod: any
}
