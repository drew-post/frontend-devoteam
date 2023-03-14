import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get<User[]>('https://randomuser.me/api/?results=50').pipe(
      map((response: any) => response.results),
      catchError(error => { return throwError(() => new Error('Something went wrong!')) })
    );
  }
}
