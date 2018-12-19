import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsuarioService} from '../usuario/usuario.service';
import {URL_SERVICIOS} from '../../config/config';
import {map} from 'rxjs/operators';
import {Medico} from '../../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(public http: HttpClient,
              public _usuarioService: UsuarioService) {
  }

  cargarMedicos(desde: number) {
    let url = URL_SERVICIOS + '/medico';
    url += '?desde=' + desde;

    return this.http.get(url);
  }

  borrarMedico(id: string) {
    let url = URL_SERVICIOS + '/medico/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete(url).pipe(
      map((res: any) => {
        swal('Médico eliminado', 'El médico "' + res.medico.nombre + '" fue eliminado correctamente', 'success');
        return true;
      })
    );
  }

  buscarMedicos(termino: string) {
    const url = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;

    return this.http.get(url).pipe(
      map((res: any) => res.medicos)
    );
  }

  guardarMedico(medico: Medico) {
    let url = URL_SERVICIOS + '/medico';

    if (medico._id) {
      // Updating

      url += '/' + medico._id + '?token=' + this._usuarioService.token;

      return this.http.put(url, medico).pipe(
        map((res: any) => {
          swal('Médico actualizado', medico.nombre, 'success');
          return res.medico;
        })
      );

    } else {
      // Creating

      url += '?token=' + this._usuarioService.token;

      return this.http.post(url, medico).pipe(
        map((res: any) => {
          swal('Médico creado', 'Médico "' + medico.nombre + '" creado correctamente', 'success');
          return res.medico;
        })
      );
    }
  }

  obtenerMedico(id: string) {
    const url = URL_SERVICIOS + '/medico/' + id;

    return this.http.get(url).pipe(
      map((res: any) => {
        return res.medico;
      })
    );
  }
}
