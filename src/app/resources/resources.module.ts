import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ResourcesComponent } from './resources.component'
import { MaterialModule } from '../material.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [ResourcesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: ResourcesComponent
      }
    ])
  ]
})
export class ResourcesModule {}
