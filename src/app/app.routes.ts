import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { PortfolioPage } from './portfolio-page/portfolio-page';
import { ContactPage } from './contact-page/contact-page';
import { NotFoundPage } from './not-found-page/not-found-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
    title: 'home',
  },
  {
    path: 'about',
    component: AboutPage,
    title: 'about',
  },
  {
    path: 'portfolio',
    component: PortfolioPage,
    title: 'portfolio',
  },
  {
    path: 'contact',
    component: ContactPage,
    title: 'contact',
  },
  {
    path: '**',
    component: NotFoundPage,
    title: 'not found',
  },
];
