import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceResultadosComponent } from './balance-resultados.component';

describe('BalanceResultadosComponent', () => {
  let component: BalanceResultadosComponent;
  let fixture: ComponentFixture<BalanceResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceResultadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalanceResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
