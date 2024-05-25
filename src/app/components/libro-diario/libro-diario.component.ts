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
  lineas: any[] = [];
  cuentaId: any;
  cuentaNombre: any;
  debeLinea: any;
  haberLinea: any;
  formIdNombre: any;
  alerta: any = null;

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
    });
  }

  ngOnInit() {
    this.getCuentas();
    this.getPartidas();
  }

  async getCuentas() {
    try {
      const respuetaGetCuentas = await this.cuentasSevices.obtenerCuentas();
      this.data = respuetaGetCuentas;
    } catch (error) {
      this.mostrarAlerta('Error al obtener las cuentas', 'danger');
    }
  }

  async getPartidas() {
    try {
      const respuetaGetPartidas = await this.partidasServices.obtenerPatidas();
      this.dataPartida = respuetaGetPartidas;
    } catch (error) {
      this.mostrarAlerta('Error al obtener las partidas', 'danger');
    }
  }

  async crearAccount(){
    try {
      const res = await this.cuentasSevices.crearAccount(this.formularioCuenta.value);
      this.formularioCuenta.reset();
      this.getCuentas();
      this.mostrarAlerta('Cuenta creada con éxito', 'success');
    } catch (error) {
      this.mostrarAlerta('Error al crear la cuenta', 'danger');
    }
  }

  async crearPartida() {
    try {
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
      this.mostrarAlerta('Partida creada con éxito', 'success');
    } catch (error) {
      this.mostrarAlerta('Error al crear la partida', 'danger');
    }
  }

  addLinea() {
    this.cuentaId = this.formularioLinea.value.cuenta.split('/')[0];
    this.cuentaNombre = this.formularioLinea.value.cuenta.split('/')[1];

    const nuevaLinea = {
      cuenta: this.cuentaId,
      nombre: this.cuentaNombre,
      debe: this.formularioLinea.value.debe,
      haber: this.formularioLinea.value.haber
    };
    this.lineas.push(nuevaLinea);
    this.formularioLinea.reset();
  }

  mostrarAlerta(mensaje: string, tipo: string) {
    this.alerta = { mensaje, tipo };
    setTimeout(() => {
      this.alerta = null;
    }, 3000);
  }

  cerrarAlerta() {
    this.alerta = null;
  }

  revertirPartida(id: any) {
    try {
      const res = this.partidasServices.revertirPartida(id);
      this.getPartidas();
      this.mostrarAlerta('Partida revertida con éxito', 'success');
      console.log(res)
    } catch (error) {
      this.mostrarAlerta('Error al revertir la partida', 'danger');
    }
  }
}
