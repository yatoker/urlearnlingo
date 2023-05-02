import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('~/app/features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('~/app/features/categories/categories.module').then((m) => m.CategoriesModule),
  },
  {
    path: 'entries',
    loadChildren: () => import('~/app/features/entries/entries.module').then((m) => m.EntriesModule),
  },
  {
    path: 'entries/:id',
    loadChildren: () => import('~/app/features/entries/entries.module').then((m) => m.EntriesModule),
  },
  {
    path: 'history',
    loadChildren: () => import('~/app/features/history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/features/settings/settings.module').then((m) => m.SettingsModule),
  },
]
@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
