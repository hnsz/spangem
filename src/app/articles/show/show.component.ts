import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../article';

@Component({
  selector: 'articles-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  articleService: ArticleService;
  article: Article;

  constructor(articleService: ArticleService) {
    this.article = articleService.getFirst();
  }

  ngOnInit(): void {
  }

}
