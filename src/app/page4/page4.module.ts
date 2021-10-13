import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page4RoutingModule } from './page4-routing.module';
import { Page4Component } from './page4.component';


@NgModule({
  declarations: [
    Page4Component
  ],
  imports: [
    CommonModule,
    Page4RoutingModule
  ]
})
export class Page4Module { }
