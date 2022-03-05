import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Authors } from 'src/app/interfaces/authorInterface';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  author: Authors = {}

  constructor(private authorService: AuthorService, private route: ActivatedRoute, private router: Router) { }

  getProfile() {
    this.authorService.getProfile().subscribe({
      next: (res: any) => {
        console.log(res)
        this.author = res
      },
      error: (httpError: any) => {
        console.log(httpError)
      }
    })
  }

  ngOnInit(): void {
    this.getProfile()
  }

}
