import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avatar } from '../models/avatar.model';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  private baseurl = "http://localhost:8000/api/foto/";
  
  constructor(private http : HttpClient) { }

  getAllPicture(){
    return this.http.get<any>(`${this.baseurl}index`);
  }

  addPicture(formData:any){
    return this.http.post<any>(`${this.baseurl}store`, formData)
  }

  getPicture(id_barang: string): Observable<Avatar> {
    return this.http.get<Avatar>(`${this.baseurl}show/`+ id_barang);
  }

  updateBarang(id: number, formData:any): Observable<Avatar>{
    return this.http.put<Avatar>(`${this.baseurl}update/`+ id, formData);
  }
  
  deleteBarang(id_barang: number): Observable<Avatar> {
    return this.http.delete<Avatar>(`${this.baseurl}destroy/`+ id_barang);
  }
}
