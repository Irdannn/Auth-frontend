import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { Avatar } from 'src/app/models/avatar.model';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  addFotoForm!: FormGroup;
  avatar: Avatar  = new Avatar();
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder, 
    private api: AvatarService, 
    private router : Router,
    private toast : NgToastService,
    private http : HttpClient
    ) {}

  ngOnInit(): void {
    this.addFotoForm = this.fb.group({
      user_id: ['', Validators.required],
      image: [File]
    });
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onAddFoto(){
    if (!this.selectedFile) {
      return;
    }
    if(this.addFotoForm.valid) {
      const formData = new FormData();
      formData.append('user_id',this.addFotoForm.value.user_id);
      formData.append('image', this.selectedFile);
      this.api.addPicture(formData)
        .subscribe({
          next:()=>{
            this.toast.success({detail: "BERHASIL!", summary:"Sukses menambah inventaris", duration: 5000});
          },
          error:()=>{
            this.toast.error({detail: "ERROR", summary:"Oops, ada Api yang salah!", duration: 5000});
          }
        })
      } else {
        ValidateForm.validateAllformsFields(this.addFotoForm);
        this.toast.error({detail: "ERROR", summary:"Input Invalid, pastikan semua sudah diisi", duration: 5000});   
      }
  }
}
