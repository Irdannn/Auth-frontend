import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  private baseUrl = "http://localhost:8000/api/foto/";

  constructor(
    private http: HttpClient
  ) { }

  addAvatar(formData:any){
    return this.http.post<any>(`${this.baseUrl}create`, formData);
  }
  getAvatar(id:any){
    return this.http.get(`${this.baseUrl}get/${id}/id`)
  }
  getAllAvatar(){
    return this.http.get<any>(`${this.baseUrl}get`);
  }
}
