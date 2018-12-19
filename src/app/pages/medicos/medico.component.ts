import {Component, OnInit} from '@angular/core';
import {HospitalService, MedicoService} from '../../services/service.index';
import {NgForm} from '@angular/forms';
import {Hospital} from '../../models/hospital.model';
import {Medico} from '../../models/medico.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalUploadService} from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  hospitales: Hospital[] = [];

  medico: Medico = new Medico('', 'asd', '', '', '');

  hospital: Hospital = new Hospital('');

  constructor(public _medicoService: MedicoService,
              public _hospitalService: HospitalService,
              public router: Router,
              public activatedRoute: ActivatedRoute,
              public _modalUploadService: ModalUploadService) {
    activatedRoute.params.subscribe(params => {
      let id = params['id'];

      if (id !== 'nuevo') {
        this.obtenerMedico(id);
      }
    });
  }

  ngOnInit() {
    this.cargarMedicos();
    this._modalUploadService.notificacion.subscribe(res => this.obtenerMedico(this.medico._id));
  }

  cargarMedicos() {
    this._hospitalService.cargarHospitales(0, 10000000)
      .subscribe((res: any) => {
        this.hospitales = res.hospitales;
      });
  }

  guardarMedico(f: NgForm) {
    if (f.invalid) {
      return;
    }

    this._medicoService.guardarMedico(this.medico)
      .subscribe((medico: Medico) => {
        this.medico._id = medico._id;
        this.router.navigate(['/medico', medico._id]);
      });
  }

  cambioHospital(id: string) {
    this._hospitalService.obtenerHospital(id)
      .subscribe(hospital => this.hospital = hospital);
  }

  obtenerMedico(id: string) {
    this._medicoService.obtenerMedico(id)
      .subscribe(medico => {
        this.medico = medico;
        this.medico.hospital = medico.hospital._id;
        this.cambioHospital(this.medico.hospital); // 'Cause is a string
      });
  }

  cambiarFoto() {
    this._modalUploadService.mostrarModal('medicos', this.medico._id);
  }
}
