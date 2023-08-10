import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '../models/userProfile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'http://localhost:8000/api/auth/profile';
  private userUrl: string = 'http://localhost:8000/api/user/';
  constructor( private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.baseUrl);
  }

  getUserProfile(id:string) {
    return this.http.get<any>(`${this.userUrl}showuser/` + id);
  }

  updateUser(id: number, formData:any): Observable<UserProfile>{
    return this.http.put<UserProfile>(`${this.userUrl}update/`+ id, formData);
  }

  getAllUser(){
    return this.http.get<any>(`${this.userUrl}index`);
  }
}
