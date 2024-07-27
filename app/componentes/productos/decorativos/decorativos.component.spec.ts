import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativosComponent } from './decorativos.component';

describe('DecorativosComponent', () => {
  let component: DecorativosComponent;
  let fixture: ComponentFixture<DecorativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
