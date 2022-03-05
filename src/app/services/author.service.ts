import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  url = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  editProfile(data: any) {
    return this.http.patch(this.url + 'profile', data)
  }

  getProfile() {
    return this.http.get(this.url + 'profile')
  }

  addImage(image:any){
    return this.http.post(this.url + 'profile/avatar', image)
  }

}
