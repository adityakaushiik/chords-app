import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css']
})
export class CalendarCellComponent {
  @Input() date: number = 0;
  @Input() isToday: boolean = false;
}
