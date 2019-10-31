import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { InformationDialogComponent } from './information-dialog/information-dialog.component'
import { AuthService } from './common/auth.service'
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel
} from '@angular/router'
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faSpinner = faSpinner
  title = 'tokenClient'
  mobile: boolean
  loading = true
  // pepe = true
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn
  }
  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName
    }
    return ''
  }
  constructor(public dialog: MatDialog, private authService: AuthService, private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent)
    })
  }
  checkRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true
    }
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.loading = false
    }
  }
  ngOnInit() {
    if (window.screen.width < 481) {
      this.mobile = true
    }
  }
  onShowDialog() {
    this.dialog.open(InformationDialogComponent)
  }
  logOut(): void {
    this.authService.logout()
    this.router.navigateByUrl('/home')
  }
}
