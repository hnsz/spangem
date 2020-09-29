import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Article } from './articles/article';

@Injectable({
  providedIn: 'root'
})
export class DataClientService {


  constructor(private http: HttpClient) { }


  getArticle(articleId: number): Observable<Article> {
    const urlstring = `http://localhost/posts/${articleId}/`;
    const options = {
      headers:  new HttpHeaders({
        Accept: 'application/json'
      }),
      observe: 'body' as const,
      responseType: 'json' as const
    };

    return this.http.get<Article>(urlstring, options);
  }

}
