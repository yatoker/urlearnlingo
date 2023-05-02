// src/app/features/categories/categories.component.ts

import { Component, Inject, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, ItemEventData } from '@nativescript/core'
import { DATA_SERVICE_TOKEN } from '~/app/core/services';
import { Category } from '~/app/core/models';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  moduleId: module.id,
  selector: 'ns-categories',
  templateUrl: 'categories.component.html'
})
export class CategoriesComponent implements OnInit {

  public categories: Category[];

  constructor(
    @Inject(DATA_SERVICE_TOKEN) private readonly dataService,
    private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.categories = this.dataService.getCategories();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  onCategoryTap(args: ItemEventData): void {
    this.routerExtensions.navigate(['entries', this.categories[args.index].id]);
  }

}

