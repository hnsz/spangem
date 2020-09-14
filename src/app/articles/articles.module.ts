import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { IndexComponent } from './index/index.component';




@NgModule({
  declarations: [
    ArticlesComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ArticlesComponent
  ]
})
export class ArticlesModule { }
