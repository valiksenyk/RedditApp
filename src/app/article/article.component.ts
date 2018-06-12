import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommunicationService} from "../services/communication.service";
import {IPost} from "../list/list.component";
import {CommentService} from "../services/comment.service";

export interface IComment {
  id?: string,
  author: string,
  body: string,
  date: any
  isMy?: boolean;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  id: string;
  article: IPost = null;
  comments: Array<any> = [];
  commentModel: string;
  isLoading: boolean;

  constructor(private _route: ActivatedRoute,
              private _communicationService: CommunicationService,
              private _commentService: CommentService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.id = this._route.snapshot.paramMap.get('id');
    this._communicationService.getArticle(this.id)
      .subscribe((res) => {
        console.log(res);
        this.article = this._createArticlesObj(res[0].data.children[0].data);
        this._parseComments(res[1]);
        this.isLoading = false;
      });

    this._commentService.getOwnComments(this.id)
      .subscribe((comment: IComment) => {
        if (comment) {
          comment.date = new Date(comment.date).getTime();
          this.comments.push(comment);
        }
      })
  }

  public save() {
    const commentObj = {
      author: 'You',
      body: this.commentModel,
      date: new Date()
    };

    this._commentService.addComment(this.id, commentObj)
      .subscribe((comment: IComment) => {
        this.commentModel = null;
        this.comments.push(comment);
      })
  }

  private _createArticlesObj(resObj): IPost {
    return {
      id: resObj.id ? resObj.id : null,
      title: resObj.title,
      text: resObj.selftext,
      url: resObj.url,
      author: resObj.author,
      date: resObj.created_utc,
      shortLink: resObj.permalink,
      image: resObj.preview ? resObj.preview.images[0].source.url : 'assets/images/default.png',
      commentsCount: resObj.num_comments
    }
  }

  private _parseComments(comments) {
    if (comments.data.children) {
      for (let child of comments.data.children) {
        this.comments.push(this._createCommentObj(child.data))
      }
    }
  }

  private _createCommentObj(resObj): IComment {
    return {
      id: resObj.id,
      author: resObj.author,
      body: resObj.body,
      date: resObj.created_utc
    }
  }

}
