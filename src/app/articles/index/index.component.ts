import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-articles-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  articles: Article[];

  constructor(articleService: ArticleService) {
    this.articles = articleService.getAll();
  }

  ngOnInit(): void {
  }

}
