import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { SettingsModule } from './settings/settings.module'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MaterialModule } from './material.module'
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component'
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TokenService } from './token.service'
import { ConfigService } from './config/config.service'
import { GetTokenComponent } from './get-token/get-token.component'
import { TokenResultComponent } from './token-result/token-result.component'
import { UseTokenComponent } from './use-token/use-token.component'
import { DataResultComponent } from './data-result/data-result.component'
import { DataService } from './common/data.service'
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component'
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    GetTokenComponent,
    TokenResultComponent,
    UseTokenComponent,
    DataResultComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),
    SettingsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatPasswordStrengthModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [TokenService, ConfigService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
