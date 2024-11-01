import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCafeComponent } from './listado-cafe.component';

describe('ListadoCafeComponent', () => {
  let component: ListadoCafeComponent;
  let fixture: ComponentFixture<ListadoCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoCafeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
