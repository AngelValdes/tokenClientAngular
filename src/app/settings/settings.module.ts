import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { SettingsComponent } from './settings.component'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: SettingsComponent }])
  ]
})
export class SettingsModule {}
