// src/app/features/categories/categories-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { CategoriesComponent } from './categories.component';

export const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CategoriesRoutingModule {}
