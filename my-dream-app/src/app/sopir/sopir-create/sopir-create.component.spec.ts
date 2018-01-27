import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SopirCreateComponent } from './sopir-create.component';

describe('SopirCreateComponent', () => {
  let component: SopirCreateComponent;
  let fixture: ComponentFixture<SopirCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SopirCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SopirCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
