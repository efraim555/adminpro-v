import {PagesComponent} from './pages.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {PagesRoutingModule} from './pages-routing.module';
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

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule,
    PipesModule
  ]
})

export class PagesModule {
}