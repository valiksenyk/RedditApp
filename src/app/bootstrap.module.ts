import { NgModule } from '@angular/core';

import {BsDropdownModule, CollapseModule} from "ngx-bootstrap";


@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  exports: [
    BsDropdownModule,
    CollapseModule
  ]
})
export class BootstrapModule { }
