import { Component, OnInit, inject } from '@angular/core';
import { DiarioServiceService } from '../../services/diario-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-libro-diario',
  templateUrl: './libro-diario.component.html',
  styleUrl: './libro-diario.component.css'
})
export class LibroDiarioComponent  implements OnInit {

  data:any
  cuentasSevices = inject(DiarioServiceService)
  formularioCuenta : FormGroup

 constructor() {
  this.formularioCuenta = new FormGroup ({
    nombre: new FormControl(),
    saldo: new FormControl(),
    tipo: new FormControl(),
  })
 }


 ngOnInit(){

  this.getCuentas()
  console.log(this.data)
}
 
 async getCuentas(){
  const respuetaGetCuentas = await this.cuentasSevices.obtenerCuentas()
  this.data = respuetaGetCuentas
 }

 sendFile():void{
  const body = new FormData()

  body.append('nombre',this.formularioCuenta.value.nombre)
  body.append('saldo',this.formularioCuenta.value.saldo)
  body.append('tipo',this.formularioCuenta.value.tipo)
  console.log(body)
 this.cuentasSevices.crearCuentas(body).subscribe(res =>{
  this.formularioCuenta.reset()
  console.log(res), this.getCuentas()})
 }


 async CrearAnio(){
  const res = await this.cuentasSevices.crearAccount(this.formularioCuenta.value)
  console.log(res)
  this.getCuentas()

}



 funcion(){

 }
}
