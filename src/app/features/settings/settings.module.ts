// src/app/features/settings/settings.module.ts

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SettingsComponent, SettingsRoutingModule} from './index';

@NgModule({
  imports: [NativeScriptCommonModule, SettingsRoutingModule],
  declarations: [SettingsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SettingsModule {}
