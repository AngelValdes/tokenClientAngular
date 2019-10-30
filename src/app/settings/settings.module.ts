import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { RouterModule } from '@angular/router'
import { SettingsComponent } from './settings.component'
import { MaterialModule } from '../material.module'
// import { ConfirmationDialogComponent } from '../common/confirmation-dialog/confirmation-dialog.component'
@NgModule({
  declarations: [SettingsComponent], // ConfirmationDialogComponent
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: SettingsComponent }])
  ]
  // entryComponents: [ConfirmationDialogComponent]
})
export class SettingsModule {}
