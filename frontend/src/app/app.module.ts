import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LandingComponent } from './pages/guest/landing/landing.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './pages/guest/login/login.component';
import { SignupComponent } from './pages/guest/signup/signup.component';
import { HouseworkBrowserComponent } from './pages/user/housework-browser/housework-browser.component';
import { HouseworkListItemComponent } from './components/housework-list-item/housework-list-item.component';
import { HouseworkDetailsComponent } from './pages/user/housework-details/housework-details.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { PointsInfoCardComponent } from './components/cards/points-info-card/points-info-card.component';
import { TodoHouseworkCardComponent } from './components/cards/todo-housework-card/todo-housework-card.component';
import { CompletedHouseworkCardComponent } from './components/cards/completed-housework-card/completed-housework-card.component';
import { HouseworkHistoryComponent } from './components/housework-history/housework-history.component';
import { LoadMoreComponent } from './components/shared/load-more/load-more.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HouseworkBrowserComponent,
    HouseworkListItemComponent,
    HouseworkDetailsComponent,
    ProfileComponent,
    PointsInfoCardComponent,
    TodoHouseworkCardComponent,
    CompletedHouseworkCardComponent,
    HouseworkHistoryComponent,
    LoadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
