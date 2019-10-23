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
  @Output() authorization: EventEmitter<string> = new EventEmitter<string>()
  @Output() selectedTab: EventEmitter<number> = new EventEmitter<number>()
  @Output() useRefreshToken: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() refreshTokenValue: EventEmitter<string> = new EventEmitter<string>()

  constructor() {}
  useTokenGetData() {
    this.selectedTab.emit(2)
    this.authorization.emit(this.tokenFullWrapper.access_token)
  }
  useRefreshTokenGetToken() {
    this.useRefreshToken.emit(true)
    this.refreshTokenValue.emit(this.tokenFullWrapper.refresh_token)
    this.selectedTab.emit(0)
  }
  ngOnInit() {}
}
