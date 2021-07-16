import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { AppComponent } from './core/views/app.component';
import { HomeComponent } from './core/views/home/home.component';
import { LandingComponent } from './core/views/landing/landing.component';
import { LoginComponent } from './core/views/login/login.component';
import { RecoverpasswordComponent } from './core/views/recoverpassword/recoverpassword.component';
import { SignupComponent } from './core/views/signup/signup.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesGridComponent } from './categories/categories-grid/categories-grid.component';
import { CategoriesPageComponent } from './categories/categories-page/categories-page.component';
import { SeriesComponent } from './series/series.component';
import { SeriesCardsComponent } from './series/series-cards/series-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { SeriesGridLandingComponent } from './series/series-grid-landing/series-grid-landing.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { MatTableModule } from '@angular/material/table';
import { SeriesIntroComponent } from './series/series-cards/series-intro/series-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    RecoverpasswordComponent,
    CategoriesComponent,
    CategoriesGridComponent,
    CategoriesPageComponent,
    SeriesComponent,
    SeriesCardsComponent,
    SeriesGridLandingComponent,
    EpisodesComponent,
    SeriesIntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
