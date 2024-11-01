import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Cafe } from './cafe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl);
  }
}
