import { Component, OnInit } from '@angular/core';
import { BalanceGeneralServiceService } from '../../services/balance-general-service.service';

@Component({
  selector: 'app-balance-general',
  templateUrl: './balance-general.component.html',
  styleUrl: './balance-general.component.css'
})
export class BalanceGeneralComponent implements OnInit {

 balance: any = {
    activos: {},
    pasivos: {},
    patrimonio: {},
    totalActivos: 0,
    totalPasivos: 0,
    totalPatrimonio: 0
  };

  constructor(private balanceGeneralService: BalanceGeneralServiceService) {}

  ngOnInit(): void {
    this.balanceGeneralService.getBalanceGeneral().subscribe(data => {
      this.balance = data;
    });
  }
}
