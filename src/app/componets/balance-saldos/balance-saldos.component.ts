import { Component, OnInit } from '@angular/core';
import { BalanceSaldosServiceService } from '../../services/balance-saldos-service.service';

@Component({
  selector: 'app-balance-saldos',
  templateUrl: './balance-saldos.component.html',
  styleUrl: './balance-saldos.component.css'
})
export class BalanceSaldosComponent implements OnInit {
  saldos: any[] = [];

  constructor(private balanceSaldosService: BalanceSaldosServiceService) {}

  ngOnInit(): void {
    this.balanceSaldosService.getBalanceSaldos().subscribe(data => {
      this.saldos = data;
    });
  }

}
