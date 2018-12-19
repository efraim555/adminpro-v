import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_SERVICIOS} from '../../config/config';
import {UsuarioService} from '../usuario/usuario.service';
import {Usuario} from '../../models/usuario.model';
import {map} from 'rxjs/operators';
import {Hospital} from '../../models/hospital.model';
import {SubirArchivoService} from '../subir-archivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  token: string;
  usuario: Usuario;

  constructor(public http: HttpClient,
              public _usuarioService: UsuarioService,
              public _subirArchivoService: SubirArchivoService) {
    this.token = _usuarioService.token;
    this.usuario = _usuarioService.usuario;
  }

  cargarHospitales(desde: number = 0, hasta: number = 5) {
    const url = URL_SERVICIOS + '/hospital?desde=' + desde + '&hasta=' + hasta;

    return this.http.get(url);
  }

  obtenerHospital(id: string) {
    const url = URL_SERVICIOS + '/hospital/' + id;

    return this.http.get(url).pipe(
      map((res: any) => res.hospital)
    );
  }

  borrarHospital(id: string) {
    let url = URL_SERVICIOS + '/hospital/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete(url).pipe(
      map((res: any) => {
        swal('Hospital borrado', 'Hospital eliminado correctamente', 'success');
        return true;
      }));
  }

  actualizarHospital(hospital: Hospital) {
    let url = URL_SERVICIOS + '/hospital/' + hospital._id;
    url += '?token=' + this._usuarioService.token;

    return this.http.put(url, hospital).pipe(
      map((res: any) => {

        swal('Hospital Actualizado', hospital.nombre, 'success');
        console.log(res);
        return true;
      })
    );
  }

  buscarHospitales(termino: string) {
    const url = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;

    return this.http.get(url).pipe(
      map((res: any) => res.hospitales)
    );
  }

  crearHospital(nombre: string) {
    let url = URL_SERVICIOS + '/hospital';
    url += '?token=' + this._usuarioService.token;

    return this.http.post(url, {nombre}).pipe(
      map((res: any) => {
        swal('Hospital creado', 'Hospital "' + nombre + '" creado correctamente', 'success');
        return res.hospital;
      })
    );
  }
}
