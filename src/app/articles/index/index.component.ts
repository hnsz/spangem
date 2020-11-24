import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Article} from '../article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-articles-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  @Output() showRequest = new EventEmitter<Article>();

  constructor(private articleService: ArticleService) {
  }
  clickHandler(article: Article): any {
    this.showRequest.emit(article);
  }

  ngOnInit(): void {
  }

}
