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
  mouseEntered = false;

  constructor(private overlay: Overlay) {}

  openComponentOverlay() {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerVertically().left('60px');


    const overlayRef = this.overlay.create({
      hasBackdrop: false,
      minWidth: '350px',
      maxWidth: '350px',
      height: '99%',
      positionStrategy: positionStrategy,
      panelClass: ['animate__zoomIn'],
    });

    const popupComponentPortal = new ComponentPortal(HistoryColumnComponent);

    overlayRef.attach(popupComponentPortal);

    overlayRef._outsidePointerEvents.subscribe(() => {
      overlayRef.dispose();
    });
  }
}
