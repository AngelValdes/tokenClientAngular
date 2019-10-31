import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate
} from '@angular/router'
import { Observable } from 'rxjs'
import { SettingsComponent } from './settings.component'
import { MatDialog } from '@angular/material/dialog'
import { ConfirmationDialogComponent } from '../common/confirmation-dialog/confirmation-dialog.component'

@Injectable({
  providedIn: 'root'
})
export class SettingsAddingGuard implements CanDeactivate<SettingsComponent> {
  constructor(public dialog: MatDialog) {}
  canDeactivate(
    component: SettingsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    /*     if (component.isDirty) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent)
      dialogRef.afterClosed().subscribe(result => {
        if (!result) {
          return false
        } else {
          return true
        }
      })
    } else {
      return true
    } */
    return new Promise(resolve => {
      if (component.isDirty) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent)
        dialogRef.afterClosed().subscribe(result => {
          resolve(result)
        })
      } else {
        resolve(true)
      }
    })
  }
}
