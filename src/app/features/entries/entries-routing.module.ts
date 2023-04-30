// src/app/features/entries/entries-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { EntriesComponent } from './entries.component';

export const routes: Routes = [
  {
    path: '',
    component: EntriesComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class EntriesRoutingModule {}
