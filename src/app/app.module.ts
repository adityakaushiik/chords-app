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
import { SideBarComponent } from './application-entry/side-bar/side-bar.component';
import { NavBarComponent } from './application-entry/nav-bar/nav-bar.component';
import {RecommendationComponent} from "./application-entry/recommendation/recommendation.component";
import {MatButtonModule} from "@angular/material/button";
import { CustomFabButtonComponent } from './utils/custom-fab-button/custom-fab-button.component';
import { CustomCardComponent } from './utils/custom-card/custom-card.component';
import { ParsingChordsComponent } from './parsing-chords/parsing-chords.component';
import {FormsModule} from "@angular/forms";
import {TooltipModule} from "./common/ui/tooltip/tooltip.module";
import {CustomCalendarComponent} from "./custom-calendar/custom-calendar.component";
import {CalendarCellComponent} from "./custom-calendar/calendar-cell/calendar-cell.component";
@NgModule({
  declarations: [
    AppComponent,
    ApplicationEntryComponent,
    HistoryColumnComponent,
    ContentComponent,
    SideBarComponent,
    NavBarComponent,
    RecommendationComponent,
    CustomFabButtonComponent,
    CustomCardComponent,
    ParsingChordsComponent,
    CustomCalendarComponent,
    CalendarCellComponent
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
    MatButtonModule,
    FormsModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
