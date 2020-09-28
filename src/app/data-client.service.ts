import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Article } from './articles/article';

@Injectable({
  providedIn: 'root'
})
export class DataClientService {


  constructor(private http: HttpClient) { }

  getArticle() {
    return this.http.get<Article>('http://localhost/posts/1/');
  }
}
