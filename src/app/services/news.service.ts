import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  addNews(news: any) {
    return this.http.post(this.url + 'news', news)
  }

  getNews() {
    return this.http.get(this.url + 'news')
  }

  deleteNews(id: any) {
    return this.http.delete(this.url + 'news/' + id)
  }

  getSingleNews(id: any) {
    return this.http.get(this.url + 'news/' + id)
  }

  updateNews(id: any, news: any) {
    return this.http.patch(this.url + 'news/' + id, news)
  }

}
