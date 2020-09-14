import { Injectable } from '@angular/core';
import { ARTICLE_DB} from './mock-articledb';
import {Article} from './article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  getAll(): Article[] {
    return ARTICLE_DB;
  }
}
