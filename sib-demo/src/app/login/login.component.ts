import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css','../../css/reset.css','../../css/flexboxgrid.css','../../css/base.css','../../css/global-header.css','../../css/styles.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
	  alert('in login');
  }
  validateLogin(){
  alert('in submit');
    this.router.navigate(['/dashboard']);
  }
}
