import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editProfileForm!: FormGroup;

  constructor(
    private route : ActivatedRoute,
    ) { 
  }

  ngOnInit(){
    // this.route.paramMap.subscribe({
    //   next: (params) => {
    //     const idBarang = params.get('idBarang');
    //     if (idBarang) {
    //       this.api.getInventory(idBarang)
    //       .subscribe({
    //         next: (response) => {
    //           this.barang = response;
    //         }
    //       })
    //     }
    //   }
    // });
  }

  onEditProfile(){
    
  }

}
