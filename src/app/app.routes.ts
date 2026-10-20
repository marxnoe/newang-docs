import { Routes } from '@angular/router';
import { HomePage } from './pages/home';
import { InstallPage } from './pages/install';
import { MigrationPage } from './pages/migration';
import { ZeroCssPage } from './pages/zero-css';
import { ThemePage } from './pages/theme';
import { ComponentDocPage } from './pages/component-doc-page';
import { NotFoundPage } from './pages/not-found';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'newAng docs' },
  { path: 'docs/install', component: InstallPage, title: 'Install · newAng' },
  { path: 'docs/migration', component: MigrationPage, title: 'Migrate from NG-ZORRO · newAng' },
  { path: 'docs/zero-css', component: ZeroCssPage, title: 'Zero-CSS · newAng' },
  { path: 'docs/theme', component: ThemePage, title: 'Theme · newAng' },
  { path: 'components/:slug', component: ComponentDocPage, title: 'Component · newAng' },
  { path: '**', component: NotFoundPage, title: 'Not found · newAng' },
];
