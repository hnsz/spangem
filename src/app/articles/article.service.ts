import { EventEmitter, Injectable } from '@angular/core';
import { ARTICLE_DB} from './mock-articledb';
import {Article} from './article';
import { DataClientService } from '../data-client.service';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleDb: Article[];
  showArticleRequest = new EventEmitter<Article>();
  newArticle: Article;

  constructor(private dataClient: DataClientService) {
    this.articleDb = ARTICLE_DB;
    // this.dataClient.getArticle(articleId).subscribe((response: Article) => this.currentArticle = { ...response });
  }

  create(article: Article): void {
    console.log(article.title);
    this.articleDb.push(article);
    const obs = this.dataClient.storeArticle(article);
    console.log(obs);
    obs.subscribe((response: Article) => this.newArticle = { ...response});
  }
  show(article: Article): void {
    this.showArticleRequest.emit(article);
  }

  getAll(): Article[] {
    return this.articleDb;
  }
}
