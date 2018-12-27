import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {APP_ROUTES} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';
import {ServiceModule} from './services/service.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PagesComponent} from './pages/pages.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    ServiceModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
