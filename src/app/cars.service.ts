import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:3000/cars'; // API endpoint

  constructor(private http: HttpClient) { }

  getCarDetails(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Return Observable of car details
  }

  addCarDetails(carDetails: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, carDetails); // Return Observable of car details
  }

  patchCarDetails(id: number, carDetails: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, carDetails); // Return Observable of car details
  }

  deleteCarDetails(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`); // Return Observable of car details
  }
}
