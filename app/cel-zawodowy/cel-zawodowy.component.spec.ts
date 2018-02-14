import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelZawodowyComponent } from './cel-zawodowy.component';

describe('CelZawodowyComponent', () => {
  let component: CelZawodowyComponent;
  let fixture: ComponentFixture<CelZawodowyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelZawodowyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelZawodowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
