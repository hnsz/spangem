import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-articles-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Output() createArticleRequest = new EventEmitter<Article>();

  articleForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });
  constructor() { }

  onSubmit() {
    const controls = this.articleForm.controls;
    const article: Article =  ({title: controls.title.value,       body: controls.title.value, });
    this.createArticleRequest.emit(article);
  }
  ngOnInit(): void {
  }

}
