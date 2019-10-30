import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { InformationDialogComponent } from './information-dialog/information-dialog.component'
// import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tokenClient'
  mobile
  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    if (window.screen.width < 481) {
      this.mobile = true
    }
  }
  onShowDialog() {
    this.dialog.open(InformationDialogComponent)
  }
}
