import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  removeId: number = -1;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://www.json-generator.com/api/json/get/bVmxmXAcgO?indent=2');
  }

}
