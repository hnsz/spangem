import { Injectable } from '@angular/core';
import { Article } from '../article';
import {ArticleListingModule} from '../article-listing/article-listing.module';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Array<Article>;

  constructor() {
    this.articles = [
      new Article(),
    ];
  }
}
