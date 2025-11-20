import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Part {
  _id?: string;
  _partName: string;
  _partType: string;
  _description: string;
  _price: number;
  _quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class PartsDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPartsList(): Observable<Part[]> {
    return this.http.get<Part[]>(`${this.apiBaseUrl}/Main`);
  }
}
