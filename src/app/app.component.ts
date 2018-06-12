import { Component } from '@angular/core';
import {CommunicationService} from "./services/communication.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = true;
  model: string;

  constructor(private _communicationService: CommunicationService, private _router: Router) {}

  search() {
    this._communicationService.searchSubreddits(this.model);
    this._router.navigate(['list']);
  }
}
