import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
  withCredentials: true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  register(username,password,empid,emailid,phone,designation,address) {
    const data = {
      username,password,empid,emailid,phone,designation,address
    }
    return this.http.post("http://localhost:3000/register", data);
    
  }

  login(username, password) {
    const data = {
      username, password
    }
    return this.http.post("http://localhost:3000/login", data, options);
    
  }
}
