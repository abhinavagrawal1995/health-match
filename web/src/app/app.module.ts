import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DiseaseCardComponent } from './disease-card/disease-card.component';
import { DiseaseCarouselComponent } from './disease-carousel/disease-carousel.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavigationService } from './services/navigation.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiseaseCardComponent,
    DiseaseCarouselComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule

  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
