// src/app/features/history/history-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { HistoryComponent } from './history.component';

export const routes: Routes = [
  {
    path: '',
    component: HistoryComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class HistoryRoutingModule {}
