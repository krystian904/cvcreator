import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertyfikatyComponent } from './certyfikaty.component';

describe('CertyfikatyComponent', () => {
  let component: CertyfikatyComponent;
  let fixture: ComponentFixture<CertyfikatyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertyfikatyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertyfikatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
