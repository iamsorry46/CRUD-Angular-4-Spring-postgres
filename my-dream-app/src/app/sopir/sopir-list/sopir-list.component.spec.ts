import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SopirListComponent } from './sopir-list.component';

describe('SopirListComponent', () => {
  let component: SopirListComponent;
  let fixture: ComponentFixture<SopirListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SopirListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SopirListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
