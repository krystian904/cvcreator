import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WyksztalcenieComponent } from './wyksztalcenie.component';

describe('WyksztalcenieComponent', () => {
  let component: WyksztalcenieComponent;
  let fixture: ComponentFixture<WyksztalcenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyksztalcenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyksztalcenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
