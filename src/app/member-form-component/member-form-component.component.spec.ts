import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFormComponentComponent } from './member-form-component.component';

describe('MemberFormComponentComponent', () => {
  let component: MemberFormComponentComponent;
  let fixture: ComponentFixture<MemberFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
