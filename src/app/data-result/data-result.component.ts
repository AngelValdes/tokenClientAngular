import { Component, OnInit, Input } from '@angular/core'
import { faInfoCircle, faCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-data-result',
  templateUrl: './data-result.component.html',
  styleUrls: ['./data-result.component.css']
})
export class DataResultComponent implements OnInit {
  faCircle = faCircle
  @Input() data: any
  constructor() {}

  ngOnInit() {}
}
