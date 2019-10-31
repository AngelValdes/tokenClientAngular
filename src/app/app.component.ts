import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { InformationDialogComponent } from './information-dialog/information-dialog.component'
import { AuthService } from './common/auth.service'
import { Router } from '@angular/router'
// import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tokenClient'
  mobile
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn
  }
  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName
    }
    return ''
  }
  constructor(public dialog: MatDialog, private authService: AuthService, private router: Router) {}
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
