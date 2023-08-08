import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApplicationEntryComponent} from "./application-entry/application-entry.component";
import {HistoryColumnComponent} from "./history-column/history-column.component";
import {ContentComponent} from "./application-entry/content/content.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReccomendationComponent} from "./application-entry/content/reccomendation/reccomendation.component";
import { SideBarComponent } from './application-entry/side-bar/side-bar.component';
import { NavBarComponent } from './application-entry/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationEntryComponent,
    HistoryColumnComponent,
    ContentComponent,
    ReccomendationComponent,
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
