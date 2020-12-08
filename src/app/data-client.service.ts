import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Article } from './articles/article';

@Injectable({
  providedIn: 'root'
})
export class DataClientService {
  xsrf: any;
  domain: string = 'localhost';

  constructor(private http: HttpClient) {
    const path = '/xsrf';
    const uri = `http://${this.domain}${path}`;
    const  promiseXsrf = http.get(uri, {observe: 'body'});
    promiseXsrf.subscribe((resp) => this.xsrf =  resp);
    

  }


  storeArticle(article: Article): Observable<Article> {
    const urlstring = `http://localhost/posts/`;
    const options = {
      headers:  new HttpHeaders({
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': this.xsrf.token,
        Accept: 'application/json'
      }),
      observe: 'body' as const,
      responseType: 'json' as const
    };
    console.log('POST Article Sent to server.');
    console.log(this.xsrf.token);

    return this.http.post<Article>(urlstring, article, options);
  }
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
