import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

//model
import { Programmer } from '../app/programmer/programmer'

@Injectable({
  providedIn: 'root'
})
export class ProgrammerService {


  constructor(private http:HttpClient) { }

  getAllProgrammers(): Observable<Programmer[]> {
    return this.http.get<Programmer[]>('http://localhost:8000/programmer');
  }

  addProgrammer(nombre,perfil,lan_favorito,git_address): Observable<Programmer>{
    const programmer = {
      nombre: nombre,
      perfil: perfil,
      lan_favorito: lan_favorito,
      git_address: git_address
    }
    return this.http.post<Programmer>('http://localhost:8000/programmer', programmer);
  }

  showProgrammer(id): Observable<Programmer> {
    return this.http.post<Programmer>('http://localhost:8000/programmer/show', id);
  }

  deleteProgrammer(id): Observable<any>{
    return this.http.post('http://localhost:8000/programmer/delete', id);
  }
}
