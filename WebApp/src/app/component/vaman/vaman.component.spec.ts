import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VamanComponent } from './vaman.component';

describe('VamanComponent', () => {
  let component: VamanComponent;
  let fixture: ComponentFixture<VamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
