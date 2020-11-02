import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import {DataClientService} from '../data-client.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ArticlesComponent,
    IndexComponent,
    ShowComponent,
    CreateComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  exports: [
    ArticlesComponent,
  ]
})
export class ArticlesModule {

}
