// src/app/features/entries/entries.component.ts

import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

@Component({
  moduleId: module.id,
  selector: 'ns-entries',
  templateUrl: 'entries.component.html'
})
export class EntriesComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
    alert('testttt!!!')
  }
}
