import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-header',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit {
  tab:string = '';
  constructor() { }

  ngOnInit() {
  }
  toggleTab(tabName,e) {
	//e.stopPropogation();
  //alert(tabName);
    this.tab = tabName;
    //this.title = this.translationLet[tabName];
    // this.subtitle = this.translationLet
  }
  @Output() gotoOtion = new EventEmitter<string>();
  gotoOtion(searchString){
    this.preview.emit(searchString);
  }
}
