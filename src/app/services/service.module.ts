import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginGuardGuard, SettingsService, SharedService, SidebarService, SubirArchivoService, UsuarioService} from './service.index';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService
  ],
  declarations: []
})
export class ServiceModule { }
