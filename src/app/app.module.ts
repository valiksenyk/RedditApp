import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BootstrapModule} from "./bootstrap.module";
import {APP_CONFIG, AppConfig} from "./app.config";
import {CommunicationService} from "./services/communication.service";
import { ListComponent } from './list/list.component';
import {HttpClientModule} from "@angular/common/http";
import { ArticleItemComponent } from './list/articl-item/article-item.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {FormsModule} from "@angular/forms";
import { ArticleComponent } from './article/article.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {CommentService} from "./services/comment.service";


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ArticleItemComponent,
    ArticleComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    InfiniteScrollModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    CommunicationService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
