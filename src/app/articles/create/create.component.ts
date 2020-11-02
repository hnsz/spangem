import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-articles-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Input() article: Article;

  articleForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
