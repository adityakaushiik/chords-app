import {Component, Input} from '@angular/core';
import {Overlay} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {HistoryColumnComponent} from "../../history-column/history-column.component";


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Input() toggleSidenav = false;
  constructor(private overlay: Overlay) {}

  openComponentOverlay(element: HTMLElement) {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(element)
      .withPositions([{
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
      }]);

    const overlayRef = this.overlay.create({
      hasBackdrop: false,
      minWidth: '350px',
      maxWidth: '350px',
      height: '500px',
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
