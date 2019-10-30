import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { NgForm } from '@angular/forms'
import { TokenService } from '../token.service'
import { ConfigService } from '../config/config.service'
import { Environments } from '../common/environments'

declare var __env: any

@Component({
  selector: 'app-get-token',
  templateUrl: './get-token.component.html',
  styleUrls: ['./get-token.component.css']
})
export class GetTokenComponent implements OnInit, OnChanges {
  @Input() useRefreshToken: boolean
  @Input() refreshTokenValue: string
  @Output() gotSelectedTab: EventEmitter<number> = new EventEmitter<number>()
  @Output() gotTokenFullWrapper: EventEmitter<any> = new EventEmitter<any>()
  @Output() gotFavoriteSelected: EventEmitter<string> = new EventEmitter<string>()
  favoriteSelected: string // to use with ngModel

  faCircle = faCircle
  postError = false
  postErrorMessage = ''
  bodyData = ''
  grantType = 'password'
  username = ''
  passwordValue = ''
  useRefreshTokenValue = ''
  useClientAuthentication = false
  apiUrl = ''
  clientId = 'JS'
  clientSecret = 'secret'
  favorites = []
  apiUrls: []

  constructor(private configService: ConfigService, private tokenService: TokenService) {}
  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: forin
    for (const propName in changes) {
      const chng = changes[propName]
      switch (chng.currentValue) {
        case true:
          this.grantType = 'refresh_token'
          break
        case false:
          this.grantType = 'password'
          break
      }
    }
  }
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
  onSubmitGetToken(form: NgForm) {
    if (form.valid) {
      this.postError = false
      this.bodyData = `grant_type=${this.grantType}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
      if (this.useRefreshToken) {
        this.bodyData += `&refresh_token=${this.refreshTokenValue}`
      } else {
        this.bodyData += `&username=${this.username}&password=${this.passwordValue}`
      }
      this.tokenService.getToken(this.apiUrl, this.bodyData).subscribe(
        result => {
          console.log('success on component', result)
          this.gotTokenFullWrapper.emit(result)
          this.gotSelectedTab.emit(1)
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
  grantTypeChanged() {
    this.useRefreshToken = this.grantType === 'refresh_token'
  }
  favoriteChanged($event) {
    this.gotFavoriteSelected.emit(this.favoriteSelected)
    this.apiUrl = this.favoriteSelected + '/token'
  }
  useRefreshTokenChange() {
    if (this.useRefreshToken) {
      this.grantType = 'refresh_token'
    } else {
      this.grantType = 'password'
    }
  }
  onHttpError(errorResponse: any) {
    console.error('error: ' + errorResponse)
    this.postError = true
    this.postErrorMessage = errorResponse
  }
}
