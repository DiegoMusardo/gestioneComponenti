import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruppoTransazioniComponent } from './gruppo-transazioni.component';

describe('GruppoTransazioniComponent', () => {
  let component: GruppoTransazioniComponent;
  let fixture: ComponentFixture<GruppoTransazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GruppoTransazioniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GruppoTransazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
