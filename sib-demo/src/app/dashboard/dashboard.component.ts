import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard.component.css','../../css/reset.css','../../css/flexboxgrid.css','../../css/base.css','../../css/styles.css']
})
export class DashboardComponent implements OnInit {
  page : string ='landing';
  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
