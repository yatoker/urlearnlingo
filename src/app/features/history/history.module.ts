// src/app/features/history/history.module.ts

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { HistoryRoutingModule, HistoryComponent} from './index';

@NgModule({
  imports: [NativeScriptCommonModule, HistoryRoutingModule],
  declarations: [HistoryComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HistoryModule {}
