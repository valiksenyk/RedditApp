import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {IComment} from "../article/article.component";

@Injectable()
export class CommentService {

  addComment(articleId, comment: IComment) {
    return new Observable((observer) => {
      try {
        comment.isMy = true;
        comment.id = this._generateId();
        if (localStorage.getItem(articleId) === null) {
          localStorage.setItem(articleId, JSON.stringify([comment]));
        } else {
          const comments = JSON.parse(localStorage.getItem(articleId));
          comments.push(comment);
          localStorage.setItem(articleId, JSON.stringify(comments));
        }
        observer.next(comment)
      } catch (e) {
        observer.error(e);
      }
    });
  }

  getOwnComments(articleId) {
    return new Observable((observer) => {
      try {
        const comment = JSON.parse(localStorage.getItem(articleId));
        observer.next(comment)
      } catch (e) {
        observer.error(e);
      }
    });
  }

  private _generateId() {
   return (Math.random() + 1).toString(36).substring(7)
  }
}
