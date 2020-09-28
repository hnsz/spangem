import { Component, OnInit } from '@angular/core';
import {Article} from './article';
import {DataClientService} from '../data-client.service';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  currentArticle: Article;

  constructor(private dataClient: DataClientService) {}
  selectArticle(articleId): void {

    this.dataClient.getArticle().subscribe((response: Article) => this.currentArticle = { ...response });

  }
  ngOnInit(): void {
  }

}
