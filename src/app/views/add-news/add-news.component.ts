import { Route, Router } from '@angular/router';
import { NewsService } from './../../services/news.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  file: any

  constructor(private fb: FormBuilder, private newsService: NewsService, private router: Router) { }

  newsForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    image: []
  })

  get myValues() {
    return this.newsForm.controls
  }

  handelUpload(event: any) {
    this.file = event.target.files
  }

  addNews(news: any) {
    const myData = new FormData()
    myData.append('image', this.file[0]),
      myData.append('description', news.description),
      myData.append('title', news.title)
      
    this.newsService.addNews(myData).subscribe({
      next: () => {
        this.router.navigateByUrl('viewNews')
      }, error: (httpError: any) => {
        console.log(httpError)
      }
    })
  }

  ngOnInit(): void {
  }

}
