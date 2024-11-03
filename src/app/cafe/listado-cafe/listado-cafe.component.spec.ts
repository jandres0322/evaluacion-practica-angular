import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoCafeComponent } from './listado-cafe.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CafeService } from '../cafe.service';
import { of } from 'rxjs';
import { Cafe } from '../cafe.model';
import { By } from '@angular/platform-browser';

describe('ListadoCafeComponent', () => {
  let component: ListadoCafeComponent;
  let fixture: ComponentFixture<ListadoCafeComponent>;
  let cafeService: CafeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoCafeComponent],
      imports: [HttpClientTestingModule],
      providers: [CafeService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoCafeComponent);
    component = fixture.componentInstance;
    cafeService = TestBed.inject(CafeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load and display the coffees in the table', () => {
    const mockCafes: Cafe[] = [
      new Cafe(1, 'Café de Origen 1', 'Café de Origen', 'Antioquia', 'Aromático', 1500, 'url1'),
      new Cafe(2, 'Blend 1', 'Blend', 'Caldas', 'Suave', 1800, 'url2'),
      new Cafe(3, 'Café de Origen 2', 'Café de Origen', 'Tolima', 'Intenso', 1700, 'url3')
    ];

    spyOn(cafeService, 'getCafes').and.returnValue(of(mockCafes));
    
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.cafes).toEqual(mockCafes);
    expect(component.totalCafeOrigen).toBe(2);
    expect(component.totalCafeBlend).toBe(1);

    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(3);

    expect(tableRows[0].nativeElement.textContent).toContain('Café de Origen 1');
    expect(tableRows[1].nativeElement.textContent).toContain('Blend 1');
    expect(tableRows[2].nativeElement.textContent).toContain('Café de Origen 2');
  });
});
