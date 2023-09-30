import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Editprofileinterface } from 'src/app/interfaces/editprofileinterface';
import { GlobalserviceService } from 'src/app/services/globalservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-showprofile',
  templateUrl: './showprofile.component.html',
  styleUrls: ['./showprofile.component.css']
})
export class ShowprofileComponent {
  constructor(private activate: ActivatedRoute, private service: GlobalserviceService , private toastr :ToastrService) { }
  profileData: any
  female: any
  male: any
  date:any
  model=
    {
      fName:"",
      lName:"",
      phone:"",
        }
  ngOnInit() {
    this.activate.paramMap.subscribe((param:any) => {

      this.service.showMyProfile().subscribe(res => {
        this.profileData = res.data.user
        console.log(this.profileData)

        if (this.profileData.gender == "female") {
          this.female = this.profileData.gender
        }
        else {
          this.male = this.profileData.gender
        }

      })
    })
  }

  getdata(){
    if(this.model.fName==""){this.model.fName= this.profileData.fName}
    if(this.model.lName==""){this.model.lName= this.profileData.lName}
    if(this.model.phone==""){this.model.phone =this.profileData.phone}
    console.log(this.model)
    console.log(this.profileData.fName)
  }
  EditProfile(form: NgForm) {
    console.log("tesr")
    console.log(this.model)
   
    if (form.valid) {
     
     
      this.service.editMyprofile(this.model).subscribe(res => {
        
        console.log(res)
        this.toastr.success("",'data edited ')
        window.location.reload()
      })
    
    }
    else {
      console.log("ana fe el elsee ")
      console.log(form)
    }

  }
}
