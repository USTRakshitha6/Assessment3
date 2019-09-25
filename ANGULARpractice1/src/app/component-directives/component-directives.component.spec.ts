import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDirectivesComponent } from './component-directives.component';

describe('ComponentDirectivesComponent', () => {
  let component: ComponentDirectivesComponent;
  let fixture: ComponentFixture<ComponentDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
