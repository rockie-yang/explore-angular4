import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipesComponent } from './recipes.component';

describe('ReceipesComponent', () => {
  let component: ReceipesComponent;
  let fixture: ComponentFixture<ReceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
