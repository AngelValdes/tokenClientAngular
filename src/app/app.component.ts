import { Component, OnInit } from '@angular/core'
// import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'
import { faInfoCircle, faCircle } from '@fortawesome/free-solid-svg-icons'

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
  resourceData: ''
  authorization = 'Authorization bearer '
  favoriteSelected = ''
  tokenFullWrapper = {
    access_token: ''
  }
  useRefreshToken = false
  refreshTokenValue = ''
  data
  constructor() {}

  onGotTokenchanged(tokenFullWrapper: any) {
    this.tokenFullWrapper = tokenFullWrapper
  }
  onGotTabChanged(tab: number) {
    this.selectedTab = tab
  }
  onGotAuthorizationChanged(tokenValue: string) {
    this.authorization += tokenValue
  }
  onGotFavoriteSelectedChanged(url: string) {
    this.favoriteSelected = url
  }
  onGotUseRefreshTokenChanged(useIt: boolean) {
    this.useRefreshToken = useIt
  }
  onGotRefreshTokenValueChanged(refreshTokenValue: string) {
    this.refreshTokenValue = refreshTokenValue
  }
  onGotData(data: any) {
    this.data = data
  }
}
