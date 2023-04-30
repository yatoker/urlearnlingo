// src/app/features/categories/categories.module.ts

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { CategoriesRoutingModule, CategoriesComponent } from './index';

@NgModule({
  imports: [NativeScriptCommonModule, CategoriesRoutingModule],
  declarations: [CategoriesComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CategoriesModule {}
