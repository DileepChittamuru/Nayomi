import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { DemoComponent } from './demo/demo.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';

@NgModule({

  declarations: [
  DashboardComponent,
  DemoComponent,
  GlobalHeaderComponent
  //HeaderComponent
  ],
	imports: [
    CommonModule,
	DashboardRoutingModule,
	TranslateModule,
  

  ]

})
export class DashboardModule {

}
