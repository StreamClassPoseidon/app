import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CategoriesPageComponent } from './categories/categories-page/categories-page.component';
import { CategoriesSeriesPageComponent } from './categories/categories-series-page/categories-series-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuard } from './core/services/auth.guard';
import { HomeComponent } from './core/views/home/home.component';
import { LandingComponent } from './core/views/landing/landing.component';
import { LoginComponent } from './core/views/login/login.component';
import { ProfileComponent } from './core/views/profile/profile.component';
import { SignupComponent } from './core/views/signup/signup.component';
import { UserpaymentComponent } from './core/views/userpayment/userpayment.component';
import { EpisodesStreamComponent } from './episodes/episodes-stream/episodes-stream.component';
import { SeriesIntroComponent } from './series/series-cards/series-intro/series-intro.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login/:activate',
    component: LoginComponent,
  },

  {
    path: 'categories',
    component: CategoriesPageComponent,
  },

  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signup/:userEmail',
    component: SignupComponent,
  },
  {
    path: 'episodes/:video',
    component: EpisodesStreamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'series/:serieId',
    component: SeriesIntroComponent,
  },
  {
    path: 'category/series/:category',
    component: CategoriesSeriesPageComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'userPayment',
    component: UserpaymentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    //canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
