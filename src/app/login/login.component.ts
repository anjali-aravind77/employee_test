import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dataservice:DataService, private router:Router, private fb:FormBuilder) { }

  loginForm = this.fb.group({
    username :['',[Validators.required]],
    password :['',[Validators.required]]
  });

  ngOnInit(): void {
  }
  login() {
    if(this.loginForm.valid){
      this.dataservice.login(this.loginForm.value.username, 
        this.loginForm.value.password)
        .subscribe((data:any) => {
          if(data) {
            
            this.router.navigateByUrl("welcome");
          }
        },(data) => {
          alert(data.error.message);
        })
      }
      }
      
  }
