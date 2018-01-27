import { Injectable } from '@angular/core';
import { Sopir } from "./sopir";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class SopirService {

  private apiUrl = 'http://localhost:8080/sopirs';

  constructor(private http: Http) {
  }

  findAll(): Observable<Sopir[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Sopir> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));

  }
  
   saveSopir(sopir: Sopir): Observable<Sopir> {
    return this.http.post(this.apiUrl, sopir)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

   updateSopir(sopir: Sopir): Observable<Sopir> {
       return this.http.put(this.apiUrl, sopir)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteSopirById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}