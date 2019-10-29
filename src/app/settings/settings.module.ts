import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SettingsComponent } from './settings.component'
import { MaterialModule } from '../material.module'
@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: 'settings', component: SettingsComponent }])
  ]
})
export class SettingsModule {}
