import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArticlesModule } from './articles/articles.module';
import { AppComponent } from './app.component';
import {DataClientService} from './data-client.service';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [

    ArticlesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
