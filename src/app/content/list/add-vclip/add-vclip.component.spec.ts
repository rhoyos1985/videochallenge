import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVclipComponent } from './add-vclip.component';

describe('AddVclipComponent', () => {
  let component: AddVclipComponent;
  let fixture: ComponentFixture<AddVclipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVclipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVclipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
