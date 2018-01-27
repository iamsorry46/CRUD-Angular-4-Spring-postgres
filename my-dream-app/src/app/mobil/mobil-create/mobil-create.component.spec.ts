import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilCreateComponent } from './mobil-create.component';

describe('MobilCreateComponent', () => {
  let component: MobilCreateComponent;
  let fixture: ComponentFixture<MobilCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
