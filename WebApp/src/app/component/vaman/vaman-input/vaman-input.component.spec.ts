import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VamanInputComponent } from './vaman-input.component';

describe('VamanInputComponent', () => {
  let component: VamanInputComponent;
  let fixture: ComponentFixture<VamanInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VamanInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VamanInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
