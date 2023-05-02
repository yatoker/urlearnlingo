import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { DATA_SERVICE_TOKEN, FirestoreService, MockDataService } from './core/services';
import { DefaultAppConfig } from './core/app.config';

export function TokenFactory() {
  return DefaultAppConfig.useFirestoreService ? new FirestoreService() : new MockDataService();
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptUISideDrawerModule],
  declarations: [AppComponent],
  providers: [{
		provide: DATA_SERVICE_TOKEN,
		useFactory: TokenFactory
	}],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
