// src/app/features/entries/entries.component.ts

import { Component, Inject, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { Category } from '~/app/core/models';
import { DATA_SERVICE_TOKEN } from '~/app/core/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ns-entries',
  templateUrl: 'entries.component.html'
})
export class EntriesComponent implements OnInit {

  public entries: Category[];
  categoryName = "All languages";

  constructor(
    @Inject(DATA_SERVICE_TOKEN) private readonly dataService,
    private activatedRoute: ActivatedRoute,) {

    const id = +this.activatedRoute.snapshot.params.id

    if (id) {
      this.categoryName = dataService.getCategoryById(id).name;
      this.entries = dataService.getEntriesByCategory(id);
    } else {
      this.entries = dataService.getEntries();
    }
  }


  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
