import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { coin, rootObject } from '../models/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://api.coincap.io/v2/assets';
  private data: coin[] = [];
  constructor(private http: HttpClient) {}

  getAssets() {
    const params = {
      limit: '10', // Especificar el límite como un string
    };
    return this.http.get<rootObject>(this.apiUrl, { params });
  }
}
