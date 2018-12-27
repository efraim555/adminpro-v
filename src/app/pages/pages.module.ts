import {PagesComponent} from './pages.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import {ChartsModule} from 'ng2-charts';
import {GraficoDonaComponent} from '../components/grafico-dona/grafico-dona.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromesasComponent} from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {PipesModule} from '../pipes/pipes.module';
import {ProfileComponent} from './profile/profile.component';
import {CommonModule} from '@angular/common';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {HospitalesComponent} from './hospitales/hospitales.component';
import {MedicosComponent} from './medicos/medicos.component';
import {MedicoComponent} from './medicos/medico.component';
import {BusquedaComponent} from './busqueda/busqueda.component';
import {PAGES_ROUTES} from './pages-routing.module';

@NgModule({
  declarations: [
    // PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    // ModalUploadComponent,
    HospitalesComponent,
    MedicosComponent,
    MedicoComponent,
    BusquedaComponent
  ],
  exports: [
    // PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ChartsModule,
    PipesModule,
    PAGES_ROUTES
  ]
})

export class PagesModule {
}
