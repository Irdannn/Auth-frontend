import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserProfile } from 'src/app/models/userProfile';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user:UserProfile  = new UserProfile();
  editProfileForm!: FormGroup;

  public uuid:string = "";
  public username:string = "";

  constructor(
    private route : ActivatedRoute,
    private api : ApiService,
    private toast : NgToastService,
    private router : Router,
    private userStore: UserStoreService,
    private auth: AuthService,
    ) { 
  }

  ngOnInit(){
    this.route.paramMap.subscribe({
      next: (params) => {
        const uuid = params.get('uuid');
        if (uuid) {
          this.api.getUserProfile(uuid)
          .subscribe({
            next: (response) => {
              this.user = response;
            }
          })
        }
      }
    });
    this.userStore.getIDFromStore()
    .subscribe(val=>{
      let uuidFromToken = this.auth.getIDFromToken()
      this.uuid=val || uuidFromToken;
    });
  }

  updateProfile(){
    this.api.updateUser(this.user.id, this.user)
    .subscribe({
      next: () => {
        this.router.navigate(['profile', this.uuid, this.username])
        this.toast.success({detail: "BERHASIL", summary:"Barang berhasil dirubah", duration: 5000});
      },
      error:()=> {
        //this.toast.error({detail: "Error", summary:"Gagal update barang", duration: 5000});
      }
    })
  }

}
