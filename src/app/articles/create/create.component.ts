import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { FormGroup, FormControl, FormBuilder, NgControlStatus } from '@angular/forms';

@Component({
  selector: 'app-articles-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  articleForm: FormGroup;

  constructor(private fbuild: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fbuild.group({
      title: [''],
      body: ['']
    });
  }

  onSubmit(): any {
    const article = this.getArticle();
    this.articleService.create(article);
  }
  getArticle(): Article {
    const ctrls = this.articleForm.controls;
    const article = {
      id: null,
      title: ctrls.title.value,
      body: ctrls.body.value,
      user_id: null,
      published_at: null,
      created_at: null,
      updated_at: null,
      deleted_at: null
    };

    return article;
  }

  ngOnInit(): void {
  }

}
