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

@NgModule({
  declarations: [AppComponent],
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
  providers: [TokenService],
  bootstrap: [AppComponent]
})
export class AppModule {}
