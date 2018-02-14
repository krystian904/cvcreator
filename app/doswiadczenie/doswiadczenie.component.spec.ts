import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoswiadczenieComponent } from './doswiadczenie.component';

describe('DoswiadczenieComponent', () => {
  let component: DoswiadczenieComponent;
  let fixture: ComponentFixture<DoswiadczenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoswiadczenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoswiadczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
