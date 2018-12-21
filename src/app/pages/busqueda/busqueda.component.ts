import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsuarioService} from '../../services/service.index';
import {HttpClient} from '@angular/common/http';
import {URL_SERVICIOS} from '../../config/config';
import {Hospital} from '../../models/hospital.model';
import {Medico} from '../../models/medico.model';
import {Usuario} from '../../models/usuario.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  usuarios: Usuario[] = [];
  hospitales: Hospital[] = [];
  medicos: Medico[] = [];

  constructor(public activatedRoute: ActivatedRoute,
              public http: HttpClient) {
    activatedRoute.params.subscribe(params => {
      const termino = params['termino'];
      this.buscar(termino);
    });
  }

  ngOnInit() {
  }

  buscar(termino: string) {
    const url = URL_SERVICIOS + '/busqueda/todo/' + termino;

    this.http.get(url).subscribe((res: any) => {
      this.usuarios = res.usuarios;
      this.hospitales = res.hospitales;
      this.medicos = res.medicos;
      console.log(res);
    });
  }

}
