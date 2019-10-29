import { Component, OnInit } from '@angular/core'
import { NgForm, NgModel } from '@angular/forms'
import { ConfigService } from '../config/config.service'
import { Environments } from '../common/environments'
declare var __env: any
@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  favoriteUrls = []
  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.getConfig().subscribe(
      (result: Environments) => {
        switch (__env.name) {
          case 'dev':
            this.favoriteUrls = result.dev.apiUrls
            break
          case 'stag':
            this.favoriteUrls = result.stag.apiUrls
            break
          case 'prod':
            this.favoriteUrls = result.prod.apiUrls
            break
        }
      },
      error => {}
    )
  }
}
