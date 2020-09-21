import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../article';

@Component({
  selector: 'app-articles-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() article: Article;

  constructor() {

  }

  ngOnInit(): void {

  }
}
