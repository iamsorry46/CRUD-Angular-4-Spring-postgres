import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilListComponent } from './mobil-list.component';

describe('MobilListComponent', () => {
  let component: MobilListComponent;
  let fixture: ComponentFixture<MobilListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
