import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {APP_CONFIG, IAppConfig} from "../app.config";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CommunicationService {

  searchSubredditsSubject = new Subject<any>();
  subreddit = 'angular2';

  constructor(private _http: HttpClient, @Inject(APP_CONFIG) private _config: IAppConfig) {}

  getArticles(limit, next, subbredit?) {
    return this._http.get(`${this._config.apiEndpoint}${this.subreddit}.json?limit=${limit}&after=${next}`)
  }

  getArticle(id) {
    return this._http.get(`${this._config.apiEndpoint}${this.subreddit}/comments/${id}.json`)
  }

  searchSubreddits(subreddit) {
    this.subreddit = subreddit;
    this.searchSubredditsSubject.next();
  }
}
