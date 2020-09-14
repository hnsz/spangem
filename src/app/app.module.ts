import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArticlesModule } from './articles/articles.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
