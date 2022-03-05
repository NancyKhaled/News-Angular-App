import { News } from 'src/app/interfaces/newsInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  news: News = {}

  constructor(private newsService: NewsService, private route: ActivatedRoute, private router: Router) { }

  id: string = this.route.snapshot.params["id"]

  getSingleNews() {
    this.newsService.getSingleNews(this.id).subscribe({
      next: (res: any) => {
        this.news = res
      }, error: (httpError: any) => {
        console.log(httpError)
      }
    })
  }

  updateNews(news: any) {
    this.newsService.updateNews(this.id, news).subscribe({
      next: () => {
        this.router.navigateByUrl('viewNews')
      }, error: (httpError: any) => {
        console.log(httpError)
      }
    })
  }

  ngOnInit(): void {
    this.getSingleNews()
  }


}
