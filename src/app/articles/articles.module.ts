import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import {DataClientService} from '../data-client.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    ArticlesComponent,
    IndexComponent,
    ShowComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    ArticlesComponent
  ]
})
export class ArticlesModule {

}
