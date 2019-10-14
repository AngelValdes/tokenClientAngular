import { Component } from '@angular/core'
import { NgForm, NgModel } from '@angular/forms'
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'
import { faInfoCircle, faCircle } from '@fortawesome/free-solid-svg-icons'
import { TokenService } from './token.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tokenClient'
  faInfoCircle = faInfoCircle
  faCircle = faCircle
  selectedTab = 0
  favorite = ''
  ContentType = 'x-www-form-urlencoded'
  grantType = 'password'
  apiUrl = 'http://api.dadeschools.net/token'
  clientId = 'JS'
  clientSecret = 'secret'
  username = ''
  passwordValue = ''
  useRefreshTokenValue = ''
  useRefreshToken = false
  useClientAuthentication = false
  postError = false
  postErrorMessage = ''
  tokenFullWrapper = {
    access_token: '',
    token_type: '',
    expires_in: null,
    token_issued: '',
    token_expires: '',
    claims: '',
    settings: '',
    apps: '',
    refresh_token: ''
  }
  resourceData: ''
  constructor(private tokenService: TokenService) {}

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
  getTokenRequest() {
    this.tokenService.GetToken().subscribe()
  }
  favoriteChanged() {
    // populate all controls based on profile
    console.log(this.favorite)
  }
  onSubmit(form: NgForm) {
    console.log('in onSubmit:', form.valid)
    if (form.valid) {
      this.postError = false
      this.tokenService.GetToken().subscribe(
        result => {
          console.log('success on component', result)
          this.tokenFullWrapper = result
          this.onTabChanged({index: 1})
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
  onHttpError(errorResponse: any) {
    console.error('error: ' + errorResponse)
    this.postError = true
    this.postErrorMessage = errorResponse.error.errorMessage
  }
  onTabChanged(event) {
    this.selectedTab = event.index
  }
  useTokenGetData() {
    this.onTabChanged({ index: 2 })
  }
  useRefreshTokenGetToken() {
    this.onTabChanged({ index: 0 })
  }
}
