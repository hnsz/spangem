import { Injectable } from '@angular/core';
import { ARTICLE_DB} from './mock-articledb';
import {Article} from './article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
   articleDb: Article[];

  constructor() {
    this.articleDb = ARTICLE_DB;
  }
  getAll(): Article[] {
    return this.articleDb;
  }
}
