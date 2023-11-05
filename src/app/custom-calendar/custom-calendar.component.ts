import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.css']
})
export class CustomCalendarComponent {
  displayDate = new Date();
  today: Date = new Date();
  currentDate: Date = new Date();
  days: Date[][] = [];
  weekDays: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ,'Sun'];

  constructor(private cd: ChangeDetectorRef) {
    this.generateCalendar();
  }

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
    this.displayDate = new Date(this.currentDate);
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
    this.displayDate = new Date(this.currentDate);
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    this.days = [];
    let currentDay = new Date(firstDay);

    // Determine the starting day of the week for the first day of the month
    let startDay = currentDay.getDay();
    if (startDay === 0) {
      startDay = 7; // If it's Sunday, set it to 7 to match the week array.
    }

    // Add the appropriate number of empty cells before the first day.
    for (let i = 1; i < startDay; i++) {
      currentDay = new Date(currentDay);
      currentDay.setDate(currentDay.getDate() - 1);
    }

    while (currentDay <= lastDay) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push(new Date(currentDay));
        currentDay = new Date(currentDay);
        currentDay.setDate(currentDay.getDate() + 1);
      }
      this.days.push(week);
    }
  }

  isSameMonth(date: Date): boolean {
    return date.getMonth() === this.currentDate.getMonth();
  }

  selectDate(date: Date) {
    console.log(date);
  }

  isToday(date: Date): boolean {
    return date.toDateString() === this.today.toDateString();
  }
}
