import { Component, OnInit } from '@angular/core';
import { BalanceResultadosServiceService } from '../../services/balance-resultados-service.service';

@Component({
  selector: 'app-balance-resultados',
  templateUrl: './balance-resultados.component.html',
  styleUrl: './balance-resultados.component.css'
})
export class BalanceResultadosComponent implements OnInit{
  
  ingresos: { cuenta: string, valor: number }[] = [];
  gastos: { cuenta: string, valor: number }[] = [];
  totalIngresos: number = 0;
  totalGastos: number = 0;
  resultadoNeto: number = 0;

  constructor(private balanceResultadosService: BalanceResultadosServiceService) {}

  ngOnInit(): void {
    this.balanceResultadosService.getBalanceResultados().subscribe(data => {
      this.totalIngresos = data.ingresos.total;
      this.totalGastos = data.gastos.total;
      this.resultadoNeto = data.resultado;

      this.ingresos = Object.keys(data.ingresos.cuentas).map(key => ({
        cuenta: key,
        valor: data.ingresos.cuentas[key]
      }));

      this.gastos = Object.keys(data.gastos.cuentas).map(key => ({
        cuenta: key,
        valor: data.gastos.cuentas[key]
      }));
    });
  }

}
