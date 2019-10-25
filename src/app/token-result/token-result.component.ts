import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-token-result',
  templateUrl: './token-result.component.html',
  styleUrls: ['./token-result.component.css']
})
export class TokenResultComponent implements OnInit {
  @Input() tokenFullWrapper: {
    access_token: ''
    token_type: ''
    expires_in: null
    token_issued: ''
    token_expires: ''
    role: ''
    claims: ''
    settings: ''
    apps: ''
    refresh_token: ''
  }
  @Output() gotAuthorization: EventEmitter<string> = new EventEmitter<string>()
  @Output() gotSelectedTab: EventEmitter<number> = new EventEmitter<number>()
  @Output() gotUseRefreshToken: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() gotRefreshTokenValue: EventEmitter<string> = new EventEmitter<string>()

  constructor() {}
  useTokenGetData() {
    this.gotSelectedTab.emit(2)
    this.gotAuthorization.emit(this.tokenFullWrapper.access_token)
  }
  useRefreshTokenGetToken() {
    this.gotUseRefreshToken.emit(true)
    this.gotRefreshTokenValue.emit(this.tokenFullWrapper.refresh_token)
    this.gotSelectedTab.emit(0)
  }
  ngOnInit() {}
}
