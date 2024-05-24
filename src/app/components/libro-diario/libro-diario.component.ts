import { Component, OnInit, inject } from '@angular/core';
import { DiarioServiceService } from '../../services/diario-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { PartidasService } from '../../services/partidas.service';

@Component({
  selector: 'app-libro-diario',
  templateUrl: './libro-diario.component.html',
  styleUrls: ['./libro-diario.component.css']
})
export class LibroDiarioComponent implements OnInit {

  data: any;
  dataPartida: any;
  cuentasSevices = inject(DiarioServiceService);
  partidasServices = inject(PartidasService);
  formularioCuenta: FormGroup;
  formularioPartida: FormGroup;
  formularioLinea: FormGroup;

  nuevaLinea: any = { cuenta: '', debe: null, haber: null };
  asientos: any[] = []; // Array de asientos

  lineas: any[] = [];
  cuentaId:any
  cuentaNombre:any
  debeLinea:any
  haberLinea:any
  formIdNombre:any


  constructor() {
    this.formularioCuenta = new FormGroup({
      nombre: new FormControl(),
      saldo: new FormControl(),
      tipo: new FormControl(),
    });

    this.formularioPartida = new FormGroup({
      fecha: new FormControl(),
      descripcion: new FormControl(),
    });
    this.formularioLinea = new FormGroup({
      cuenta: new FormControl(),
      debe: new FormControl(),
      haber: new FormControl(),
      id: new FormControl()
    });

  }

  addLinea() {

    this.cuentaId = this.formIdNombre.split('/')[0]
    this.cuentaNombre = this.formIdNombre.split('/')[1]
    console.log(this.cuentaNombre)

    this.lineas.push({ cuenta : this.cuentaId ,nombre: this.cuentaNombre, debe: this.debeLinea, haber:  this.haberLinea});
    console.log(this.lineas);

    this.limpiarLinea();
  }

  limpiarLinea() {
    this.haberLinea = null;
    this.debeLinea = null;
    this.formIdNombre = null
    this.cuentaId = null
  }

  ngOnInit() {
    this.getCuentas();
    this.getPartidas();
  }

  async getCuentas() {
    const respuetaGetCuentas = await this.cuentasSevices.obtenerCuentas();
    this.data = respuetaGetCuentas;
  }

  async getPartidas() {
    const respuetaGetPartidas = await this.partidasServices.obtenerPatidas();
    this.dataPartida = respuetaGetPartidas;
  }

  sendFile(): void {
    const body = new FormData();
    body.append('nombre', this.formularioCuenta.value.nombre);
    body.append('saldo', this.formularioCuenta.value.saldo);
    body.append('tipo', this.formularioCuenta.value.tipo);

    this.cuentasSevices.crearCuentas(body).subscribe(res => {
      this.formularioCuenta.reset();
      this.getCuentas();
    });
  }

  async crearPartida() {
    const partida = {
      fecha: this.formularioPartida.value.fecha,
      descripcion: this.formularioPartida.value.descripcion,
      asientos: this.lineas.map(linea => ({
        cuenta: linea.cuenta,
        debe: linea.debe,
        haber: linea.haber
      }))
    };

    const res = await this.partidasServices.crearPartida(partida);
    this.lineas = [];
    this.formularioPartida.reset();
    this.getPartidas();
  }

  
}
