import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css']
})
export class CalendarCellComponent implements OnInit{
  @Input() date: number = 0;
  @Input() isToday: boolean = false;
  @Input() status:string = "";
  statusClass : string = "";

  ngOnInit() {
    this.cellColor(this.status);
  }

  cellColor(task:string){
    if (task === "Present") this.statusClass = "isPresent";
    else if (task === "Absent") this.statusClass = "isAbsent";
  }
}
