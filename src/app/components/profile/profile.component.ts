import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { UserProfile } from 'src/app/models/userProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public users:any = [];
  public role!:string;
  user:UserProfile  = new UserProfile();

  public fullName:string = "";
  constructor(
    private api : ApiService, 
    private auth: AuthService, 
    private userStore: UserStoreService, 
    private router: Router,
    public dialog: MatDialog) { }


  ngOnInit() {
    this.api.getUsers()
    .subscribe(res=>{
      this.users = res;
    })

    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      let fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullName = val || fullNameFromToken;
    })

    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      const roleRoleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleRoleFromToken
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(EditProfileComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
