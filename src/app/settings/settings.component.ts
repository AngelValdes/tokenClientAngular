import { Component, OnInit } from '@angular/core'
import { ConfigService } from '../config/config.service'
import { Environments } from '../common/environments'
import { MatDialog } from '@angular/material/dialog'
import { ConfirmationDialogComponent } from '../common/confirmation-dialog/confirmation-dialog.component'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
declare var __env: any
@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  form: FormGroup
  favoriteUrls = []
  // favoriteUrl
  constructor(
    private configService: ConfigService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.createForm()
  }
  createForm() {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
    this.form = this.fb.group({
      favoriteUrl: ['', [Validators.required, Validators.pattern(reg)]]
    })
  }
  ngOnInit() {
    this.configService.getConfig().subscribe(
      (result: Environments) => {
        switch (__env.name) {
          case 'dev':
            this.favoriteUrls = result.dev.apiUrls
            break
          case 'stag':
            this.favoriteUrls = result.stag.apiUrls
            break
          case 'prod':
            this.favoriteUrls = result.prod.apiUrls
            break
        }
      },
      error => {}
    )
  }
  onAdd() {
    if (this.form.valid) {
      this.favoriteUrls.push({ name: '', value: this.form.get('favoriteUrl').value })
      this.form.reset()
    }
  }
  onDelete(url) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent)

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.favoriteUrls.splice(this.favoriteUrls.findIndex(item => item.value === url), 1)
      }
    })
  }
}
