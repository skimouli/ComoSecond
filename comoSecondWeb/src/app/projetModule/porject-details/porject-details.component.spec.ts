import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjectDetailsComponent } from './porject-details.component';

describe('PorjectDetailsComponent', () => {
  let component: PorjectDetailsComponent;
  let fixture: ComponentFixture<PorjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
