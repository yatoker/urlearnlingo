// src/app/features/settings/settings.component.ts

import { Component, Inject, OnInit } from '@angular/core'
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { DATA_SERVICE_TOKEN } from '~/app/core/services';

@Component({
  moduleId: module.id,
  selector: 'ns-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent implements OnInit {
  constructor(@Inject(DATA_SERVICE_TOKEN) private readonly dataService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.dataService.greet();
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
