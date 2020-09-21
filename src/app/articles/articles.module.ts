import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';




@NgModule({
  declarations: [
    ArticlesComponent,
    IndexComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ArticlesComponent
  ]
})
export class ArticlesModule {

}
