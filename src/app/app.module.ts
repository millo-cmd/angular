import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroDiarioComponent } from './components/libro-diario/libro-diario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalanceSaldosComponent } from './componets/balance-saldos/balance-saldos.component';
import { LibroMayorComponent } from './componets/libro-mayor/libro-mayor.component';
import { BalanceResultadosComponent } from './componets/balance-resultados/balance-resultados.component';
import { BalanceGeneralComponent } from './componets/balance-general/balance-general.component';
import { NavbarComponent } from './componets/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroDiarioComponent,
    BalanceSaldosComponent,
    LibroMayorComponent,
    BalanceResultadosComponent,
    BalanceGeneralComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
