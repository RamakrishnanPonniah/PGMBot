import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VamanAvatarComponent } from './vaman-avatar.component';

describe('VamanAvatarComponent', () => {
  let component: VamanAvatarComponent;
  let fixture: ComponentFixture<VamanAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VamanAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VamanAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
