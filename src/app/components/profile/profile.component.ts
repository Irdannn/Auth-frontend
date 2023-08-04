import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { UserProfile } from 'src/app/models/userProfile';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public users:any = [];
  listUser: any[] = [];
  public role!:string;
  public id:string = "";
  user:UserProfile  = new UserProfile();

  public fullName:string = "";
  constructor(
    private api : ApiService, 
    private auth: AuthService, 
    private userStore: UserStoreService, 
    private router: Router,
    public dialog: MatDialog,
    private route : ActivatedRoute,
    ) { }


  ngOnInit() {
    this.api.getUsers()
    .subscribe(res=>{
      this.users = res;
    });

    // this.api.getUserProfile(this.id)
    // .subscribe(res=>{
    //   this.users = res;
    // });

    this.userStore.getIDFromStore()
    .subscribe(val=>{
      let idFromToken = this.auth.getIDFromToken()
      this.id=val || idFromToken;
    });

    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      let fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullName = val || fullNameFromToken;
    });

    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      const roleRoleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleRoleFromToken
    });

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.api.getUserProfile(id)
          .subscribe({
            next: (response) => {
              this.user = response;
            }
          })
        }
      }
    });
  }
}
