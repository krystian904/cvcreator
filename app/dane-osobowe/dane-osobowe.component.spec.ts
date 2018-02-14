import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaneOsoboweComponent } from './dane-osobowe.component';

describe('DaneOsoboweComponent', () => {
  let component: DaneOsoboweComponent;
  let fixture: ComponentFixture<DaneOsoboweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaneOsoboweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaneOsoboweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
