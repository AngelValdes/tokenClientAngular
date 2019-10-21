import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-token-result',
  templateUrl: './token-result.component.html',
  styleUrls: ['./token-result.component.css']
})
export class TokenResultComponent implements OnInit {
  @Output() authorization: EventEmitter<string> = new EventEmitter<string>()
  @Output() selectedTab: EventEmitter<number> = new EventEmitter<number>()
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
  constructor() {}
  useTokenGetData() {
    this.selectedTab.emit(2)
    this.authorization.emit(this.tokenFullWrapper.access_token)
  }
  useRefreshTokenGetToken() {
    this.selectedTab.emit(0)
    // set all other properties to use refresh token
  }
  ngOnInit() {}
}
