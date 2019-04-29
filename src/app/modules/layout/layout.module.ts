import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { layoutRoutes } from "./layout.routes";

import { LayoutComponent } from './layout/layout.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(layoutRoutes)
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutModule { }
