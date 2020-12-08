import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../article';

@Component({
  selector: 'app-articles-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  article: Article;

  constructor(private articleService: ArticleService) {
    this.articleService.showArticleRequest.subscribe((response: Article) => this.article = {... response});
  }

  ngOnInit(): void {

  }
}
