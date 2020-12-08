import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Article} from '../article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-articles-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  articleList: Article[];

  constructor(private articleService: ArticleService) {
    this.articleList = this.articleService.getAll();
  }
  clickHandler(article: Article): any {
    this.articleService.show(article);
  }

  ngOnInit(): void {
  }

}
