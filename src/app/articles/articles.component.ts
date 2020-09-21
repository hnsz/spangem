import { Component, OnInit } from '@angular/core';
import {Article} from './article';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  currentArticle: Article;

  constructor() {}
  selectArticle(article: Article): void {
    this.currentArticle = article;
  }
  ngOnInit(): void {
  }

}
