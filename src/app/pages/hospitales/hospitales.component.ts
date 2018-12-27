import {Component, OnInit} from '@angular/core';
import {HospitalService} from '../../services/service.index';
import {Hospital} from '../../models/hospital.model';
import {ModalUploadService} from '../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];

  desde = 0;

  totalHospitales = 0;
  cargando = true;

  constructor(public _hospitalService: HospitalService,
              public _modalUploadService: ModalUploadService) {
  }

  ngOnInit() {
    this.cargarHospitales();
    this._modalUploadService.notificacion.subscribe(res => this.cargarHospitales());
  }

  cargarHospitales() {

    this.cargando = true;

    this._hospitalService.cargarHospitales(this.desde)
      .subscribe((res: any) => {
        this.totalHospitales = res.total;
        this.hospitales = res.hospitales;

        this.cargando = false;
      });
  }

  cambiarDesde(valor: number) {

    const desde = this.desde + valor;

    if (desde >= this.totalHospitales) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarHospitales();
  }

  borrarHospital(hospital: Hospital) {
    swal({
      title: '¿Estás seguro?',
      text: 'Está a punto de borrar el hospital:  ' + hospital.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((borrar) => {

        if (borrar) {
          this._hospitalService.borrarHospital(hospital._id)
            .subscribe((borrado: boolean) => {
              this.cargarHospitales();
            });
        }
      });
  }

  guardarHospital(hospital: Hospital) {
    this._hospitalService.actualizarHospital(hospital).subscribe((res: any) => {
      console.log(res);
    });
  }

  buscarHospital(termino: string) {
    // @ts-ignore
    if (termino.length <= 0) {
      this.cargarHospitales();
      return;
    }

    this.cargando = true;

    this._hospitalService.buscarHospitales(termino)
      .subscribe((hospitales: Hospital[]) => {
        this.hospitales = hospitales;
        this.cargando = false;
      });
  }

  crearHospital() {
    swal({
      title: 'Crear Hospital',
      text: 'Ingrese el nombre del hospital',
      content: 'input',
      icon: 'info',
      button: true,
      dangerMode: true
    })
      .then((nombre: string) => {
        if (!nombre) {
          swal('Aviso', 'Debes ingresar al menos una palabra para el nombre', 'warning');
          return;
        }

        this._hospitalService.crearHospital(nombre)
          .subscribe((res: any) => {
            this.cargarHospitales();
          });
      });


  }

  mostrarModal(id: string) {
    this._modalUploadService.mostrarModal('hospitales', id);
  }
}
