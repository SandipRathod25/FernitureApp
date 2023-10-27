import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroFirstComponent } from './hero-first/hero-first.component';
import { NewinComponent } from './newin/newin.component';
import { CardsComponent } from './cards/cards.component';
import { SofaComponent } from './sofa/sofa.component';
import { IdeasComponent } from './ideas/ideas.component';
import { SummerComponent } from './summer/summer.component';
import { CoverpageComponent } from './coverpage/coverpage.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroFirstComponent,
    NewinComponent,
    CardsComponent,
    SofaComponent,
    IdeasComponent,
    SummerComponent,
    CoverpageComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
