import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoweComponent } from './gotowe.component';

describe('GotoweComponent', () => {
  let component: GotoweComponent;
  let fixture: ComponentFixture<GotoweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotoweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotoweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
