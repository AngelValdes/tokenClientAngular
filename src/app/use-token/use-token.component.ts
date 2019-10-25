import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { NgForm } from '@angular/forms'
import { DataService } from '../common/data.service'

@Component({
  selector: 'app-use-token',
  templateUrl: './use-token.component.html',
  styleUrls: ['./use-token.component.css']
})
export class UseTokenComponent implements OnInit {
  @Input() authorization: string
  @Input() favoriteSelected: string
  @Output() gotData: EventEmitter<any> = new EventEmitter<any>()
  @Output() gotSelectedTab: EventEmitter<number> = new EventEmitter<number>()
  postError = false
  postErrorMessage = ''
  constructor(private dataService: DataService) {}

  ngOnInit() {}
  onSubmitGetData(form: NgForm) {
    if (form.valid) {
      this.postError = false
      this.dataService.get(this.favoriteSelected, this.authorization).subscribe(
        result => {
          // console.log('success on component', result)
          this.gotData.emit(JSON.stringify(result))
          this.gotSelectedTab.emit(3)
        },
        error => {
          this.postError = true
          this.postErrorMessage = 'Either token or api route invalid'
          this.onHttpError(error)
        }
      )
    }
  }
  onHttpError(errorResponse: any) {
    console.error('error: ' + errorResponse)
  }
}
