import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule, PreloadAllModules } from '@angular/router'
import { MaterialModule } from './material.module'
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ConfirmationDialogComponent } from './common/confirmation-dialog/confirmation-dialog.component'

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
import { InformationDialogComponent } from './information-dialog/information-dialog.component'
import { AuthService } from './common/auth.service'
import { AuthGuard } from './common/auth.guard'
import { LoginComponent } from './common/login/login.component'
import { SettingsResolver } from './settings/settings-resolver.service'

@NgModule({
  declarations: [
    AppComponent,
    GetTokenComponent,
    TokenResultComponent,
    UseTokenComponent,
    DataResultComponent,
    PageNotFoundComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    InformationDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: 'home', component: HomeComponent },
        {
          path: 'settings',
          canActivate: [AuthGuard],
          canLoad: [AuthGuard],
          resolve: { apiUrls: SettingsResolver },
          loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
        },
        {
          path: 'resources',
          loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule)
        },
        { path: 'login', component: LoginComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent }
      ],
      { preloadingStrategy: PreloadAllModules }
    ),
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatPasswordStrengthModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [TokenService, ConfigService, DataService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent, InformationDialogComponent]
})
export class AppModule {}
