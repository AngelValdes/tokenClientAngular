import { Component } from '@angular/core'
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'
import { faInfoCircle, faCircle } from '@fortawesome/free-solid-svg-icons'
// import { ngMOdel }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tokenClient'
  faInfoCircle = faInfoCircle
  faCircle = faCircle
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
}
