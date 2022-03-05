import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { News } from 'src/app/interfaces/newsInterface';
import { NewsService } from './../../services/news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  news: News[] = []

  constructor(private newsService: NewsService) { }

  getNews() {
    this.newsService.getNews().subscribe({
      next: (res: any) => {
        this.news = res
      }, error: (httpError: any) => {
        console.log(httpError)
      }
    })
  }

  deleteNews(id: any, i: number) {
    this.newsService.deleteNews(id).subscribe({
      next: () => {
        this.news.splice(i, 1)
      }, error: (httpError: any) => {
        console.log(httpError)
      }
    })
  }


  ngOnInit(): void {
    this.getNews()
  }

}
