import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { MaterialModule } from './material.module'
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component'
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TokenService } from './token.service'
import { ConfigService } from './config/config.service';
import { GetTokenComponent } from './get-token/get-token.component';
import { TokenResultComponent } from './token-result/token-result.component';
import { UseTokenComponent } from './use-token/use-token.component';
import { DataResultComponent } from './data-result/data-result.component'

@NgModule({
  declarations: [AppComponent, GetTokenComponent, TokenResultComponent, UseTokenComponent, DataResultComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatPasswordStrengthModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [TokenService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
