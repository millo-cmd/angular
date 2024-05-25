import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroDiarioComponent } from './components/libro-diario/libro-diario.component';
import { LibroMayorComponent } from './componets/libro-mayor/libro-mayor.component';
import { BalanceSaldosComponent } from './componets/balance-saldos/balance-saldos.component';
import { BalanceGeneralComponent } from './componets/balance-general/balance-general.component';
import { BalanceResultadosComponent } from './componets/balance-resultados/balance-resultados.component';

const routes: Routes = [
 {path:'',redirectTo:'Diario', pathMatch:'full'},
 {path:'Diario',title:'Diario',component:LibroDiarioComponent},
 {path:'Mayor',title:'Mayor',component:LibroMayorComponent},
 {path:'Saldos',title:'Saldos',component:BalanceSaldosComponent},
 {path:'Resultados',title:'Resultados',component:BalanceResultadosComponent},
 {path:'General',title:'General',component:BalanceGeneralComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
