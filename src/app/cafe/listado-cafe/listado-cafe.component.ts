import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe.model';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-listado-cafe',
  templateUrl: './listado-cafe.component.html',
  styleUrl: './listado-cafe.component.scss'
})
export class ListadoCafeComponent implements OnInit {

  cafes: Array<Cafe> = [];
  totalCafeOrigen: number = 0;
  totalCafeBlend: number = 0;

  constructor(
    private cafeService: CafeService
  ) {}

  ngOnInit(): void {
    this.getCafes();
  }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes: Cafe[]) => {
      this.cafes = cafes;
      this.totalCafeOrigen = cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
      this.totalCafeBlend = cafes.filter(cafe => cafe.tipo === 'Blend').length;
    });
  }
}
