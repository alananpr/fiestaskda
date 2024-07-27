import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdornosComponent } from './adornos.component';

describe('AdornosComponent', () => {
  let component: AdornosComponent;
  let fixture: ComponentFixture<AdornosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdornosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdornosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
