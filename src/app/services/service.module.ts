import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  LoginGuardGuard,
  SettingsService,
  SharedService,
  SidebarService,
  SubirArchivoService,
  UsuarioService,
  HospitalService,
  MedicoService
} from './service.index';
import {HttpClientModule} from '@angular/common/http';
import {ModalUploadService} from '../components/modal-upload/modal-upload.service';

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
    SubirArchivoService,
    ModalUploadService,
    HospitalService,
    MedicoService
  ],
  declarations: []
})
export class ServiceModule {
}
