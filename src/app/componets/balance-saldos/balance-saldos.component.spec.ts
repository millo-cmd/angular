import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSaldosComponent } from './balance-saldos.component';

describe('BalanceSaldosComponent', () => {
  let component: BalanceSaldosComponent;
  let fixture: ComponentFixture<BalanceSaldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceSaldosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalanceSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
