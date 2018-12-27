import {Component, OnInit} from '@angular/core';
import {Medico} from '../../models/medico.model';
import {MedicoService} from '../../services/service.index';
import {ModalUploadService} from '../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];

  desde = 0;

  totalMedicos = 0;

  cargando = true;

  constructor(public _medicoService: MedicoService,
              public _modalUploadService: ModalUploadService) {
  }

  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos() {

    this.cargando = true;

    this._medicoService.cargarMedicos(this.desde)
      .subscribe((res: any) => {
        this.totalMedicos = res.total;
        this.medicos = res.medicos;
        this.cargando = false;
      });
  }

  cambiarDesde(valor: number) {

    const desde = this.desde + valor;

    if (desde >= this.totalMedicos) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarMedicos();
  }

  borrarMedico(medico: Medico) {
    swal({
      title: '¿Estás seguro?',
      text: 'Está a punto de borrar al médico:  ' + medico.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((borrar) => {

        if (borrar) {
          this._medicoService.borrarMedico(medico._id)
            .subscribe((borrado: boolean) => {
              this.cargarMedicos();
            });
        }
      });
  }

  buscarMedico(termino: string) {
    if (termino.length <= 0) {
      this.cargarMedicos();
      return;
    }

    this.cargando = true;

    this._medicoService.buscarMedicos(termino)
      .subscribe((medicos: Medico[]) => {
        this.medicos = medicos;
        this.cargando = false;
      });
  }

}
