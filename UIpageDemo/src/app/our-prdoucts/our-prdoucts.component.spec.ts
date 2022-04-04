import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPrdouctsComponent } from './our-prdoucts.component';

describe('OurPrdouctsComponent', () => {
  let component: OurPrdouctsComponent;
  let fixture: ComponentFixture<OurPrdouctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurPrdouctsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPrdouctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
