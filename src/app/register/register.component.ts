import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from "../services/data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private dataService:DataService, private router:Router, 
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  registerForm = this.fb.group({
    username:['' ,[Validators.required]],
    password:['',[Validators.required]],
    empid:['',[Validators.required]],
    emailid:['',[Validators.required]],
    phone:['',[Validators.required]],
    designation:['',[Validators.required]],
    address:['',[Validators.required]]
  });

  getError(er_field){
    return (this.registerForm.get(er_field).touched || this.registerForm.get(er_field).dirty)&& this.registerForm.get(er_field).errors;
  }
  register(){
    if(this.registerForm.valid){
      this.dataService.register(this.registerForm.value.username,
        this.registerForm.value.password,
        this.registerForm.value.empid,
        this.registerForm.value.emailid, this.registerForm.value.phone, 
        this.registerForm.value.designation, this.registerForm.value.address)
      
    .subscribe((data:any) => {
      if(data) {
        alert("succesfully created account. please login");
         this.router.navigateByUrl("");
      }
     } ,(data) => {
        alert(data.error.message);
      
    })
    } else {
    alert("form is invalid");
    }
   
    
    }
}
