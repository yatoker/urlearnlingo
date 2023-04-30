// src/app/features/entries/entries.module.ts

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { EntriesRoutingModule, EntriesComponent} from './index';

@NgModule({
  imports: [NativeScriptCommonModule, EntriesRoutingModule],
  declarations: [EntriesComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class EntriesModule {}
