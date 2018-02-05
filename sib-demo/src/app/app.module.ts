import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';
//import { DashboardComponent } from './dashboard/dashboard.component';


export function HttpLoaderFactory(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,
	HeaderComponent
	//DashboardComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
  HttpClientModule,
  DashboardModule,
  TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
