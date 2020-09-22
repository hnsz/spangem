import { Injectable } from '@angular/core';
import { ARTICLE_DB} from './mock-articledb';
import {Article} from './article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
   articleDb: Article[];
   article: Article;

  constructor() {
    this.articleDb = ARTICLE_DB;
    this.setArticle(1);
  }
  getAll(): Article[] {
    return this.articleDb;
  }
  currentArticle(): Article {
    return this.article;
  }
  setArticle(idx: number): any {
    this.article = this.articleDb[idx];
  }
}
