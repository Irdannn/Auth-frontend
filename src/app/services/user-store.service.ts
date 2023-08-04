import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private fullName$ = new BehaviorSubject<string>("");
  private role$ = new BehaviorSubject<string>("");
  private uuid$ = new BehaviorSubject<string>("");
  private username$ = new BehaviorSubject<string>("");

  constructor() { }

  public getRoleFromStore(){
    return this.role$.asObservable();
  }

  public setRoleForStore(role:string) {
    this.role$.next(role);
  }

  public getFullNameFromStore() {
    return this.fullName$.asObservable();
  }

  public setFullNameForStore(fullname:string){
    this.fullName$.next(fullname)
  }

  public getUUIDFromStore(){
    return this.uuid$.asObservable();
  }

  public setUUIDforStore(uuid:string){
    this.uuid$.next(uuid)
  }

  public getuserNameFromStore(){
    return this.username$.asObservable();
  }

  public setuserNameforStore(username:string){
    this.username$.next(username)
  }
}
