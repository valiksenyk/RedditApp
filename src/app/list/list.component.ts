import {Component, OnInit} from '@angular/core';
import {CommunicationService} from "../services/communication.service";
import {Observable} from "rxjs/Observable";

export interface IPost {
  id: string,
  title: string,
  text?: string,
  url: string,
  author?: string,
  date?: number,
  shortLink: string,
  image: string,
  commentsCount: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Array<any> = [];
  next: string;
  showError: boolean;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  limit = 25;

  constructor(private _communicationService: CommunicationService) {
    _communicationService.searchSubredditsSubject.subscribe(() => {
      this.next = null;
      this.list = [];
      this.getArticles();
    });
  }

  ngOnInit() {
    this.getArticles();
  }

  public getArticles() {
    this._communicationService.getArticles(this.limit, this.next)
      .subscribe(res => {
          this._parseResponse(res);
        },
        error => {
          if (error.status === 404) {
            this.showError = true;
          }
        })
  }

  public loadMore() {
    this.getArticles();
  }

  private _parseResponse(res) {
    const response = res.data;
    response.after && (this.next = response.after);
    for (const item of response.children) {
      this.list.push(this._createArticlesObj(item.data));
    }
  }

  private _createArticlesObj(resObj): IPost {
    return {
      id: resObj.id ? resObj.id : null,
      title: resObj.title,
      url: resObj.url,
      shortLink: resObj.permalink,
      image: resObj.preview ? resObj.preview.images[0].source.url : 'assets/images/default.png',
      commentsCount: resObj.num_comments,
      date: resObj.created_utc
    }
  }

}
