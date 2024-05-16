import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitioComponent } from './titio.component';

describe('TitioComponent', () => {
  let component: TitioComponent;
  let fixture: ComponentFixture<TitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
