import { Component, OnInit } from '@angular/core';
import {Article} from './article';
import {DataClientService} from '../data-client.service';
import { ArticleService } from './article.service';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  currentArticle: Article;

  constructor(private articleService: ArticleService) {}


  showRequestHandler(article: Article): void {
    return;
  }
  createRequestHandler(): void {
    return;
  }

  ngOnInit(): void {
  }

}
