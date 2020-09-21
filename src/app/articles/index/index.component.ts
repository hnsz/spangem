import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Article} from '../article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-articles-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  articles: Article[];
  @Output() articleSelectEvent = new EventEmitter<Article>();

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getAll();
  }
  clickHandler(article: Article): any {
    this.articleSelectEvent.emit(article);
  }

  ngOnInit(): void {
  }

}
