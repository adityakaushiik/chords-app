import { Component } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { HistoryColumnComponent } from '../history-column/history-column.component';

@Component({
  selector: 'app-application-entry',
  templateUrl: './application-entry.component.html',
  styleUrls: ['./application-entry.component.scss'],
})
export class ApplicationEntryComponent {
  toggleSidenav = false;



}
