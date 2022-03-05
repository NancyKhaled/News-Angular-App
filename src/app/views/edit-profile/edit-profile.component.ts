import { AuthorService } from 'src/app/services/author.service';
import { Authors } from './../../interfaces/authorInterface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  author: Authors = {}
  file:any

  constructor(private authorService: AuthorService, private router: Router) { }

  getProfile() {
    this.authorService.getProfile().subscribe({
      next: (res: any) => {
        this.author = res
      }, error: (httpError: any) => {
        console.log(httpError)
      }
    })
  }

  updateProfile(author: any) {
    this.authorService.editProfile(author).subscribe({
      next: () => {
        this.uploadFile()
        this.router.navigateByUrl('profile')
      }, error: (httpError: any) => {
        console.log(httpError)
      }
    })
  }

handelUpload(event:any){
  console.log(event.target.files)
  this.file = event.target.files
}

  uploadFile(){
    if(this.file){
      const myData = new FormData()
      myData.append("avatar", this.file[0])
      this.authorService.addImage(myData).subscribe(()=>{})
    }
  }
  

  ngOnInit(): void {
    this.getProfile()
  }

}
