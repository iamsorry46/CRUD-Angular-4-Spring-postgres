import { Injectable } from '@angular/core';
import { Mobil } from "./mobil";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MobilService {

  private apiUrl = 'http://localhost:8080/mobils';

  constructor(private http: Http) {
  }

  findAll(): Observable<Mobil[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Mobil> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));

  }
  
   saveMobil(mobil: Mobil): Observable<Mobil> {
     return this.http.post(this.apiUrl, mobil)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

   deleteMobilById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  updateMobil(mobil: Mobil): Observable<Mobil> {
     return this.http.put(this.apiUrl, mobil)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}