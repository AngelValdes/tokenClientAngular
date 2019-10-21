import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-use-token',
  templateUrl: './use-token.component.html',
  styleUrls: ['./use-token.component.css']
})
export class UseTokenComponent implements OnInit {
  @Input() authorization: string
  @Input() favoriteSelected: string
  constructor() {}

  ngOnInit() {}
}
