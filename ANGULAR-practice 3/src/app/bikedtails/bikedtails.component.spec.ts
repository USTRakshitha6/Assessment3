import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikedtailsComponent } from './bikedtails.component';

describe('BikedtailsComponent', () => {
  let component: BikedtailsComponent;
  let fixture: ComponentFixture<BikedtailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikedtailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikedtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
