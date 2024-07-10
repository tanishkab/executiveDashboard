import { Component, Input, OnInit, Output } from '@angular/core';
import { Dayjs } from 'dayjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent{

  
  ranges = {
    'Today': this.getDateRange('Today'),
    'Yesterday': this.getDateRange('Yesterday'),
    'Last 7 Days': this.getDateRange('Last 7 Days'),
    'Last 30 Days': this.getDateRange('Last 30 Days'),
    'This Month': this.getDateRange('This Month'),
    'Last Month': this.getDateRange('Last Month')
  };
  @Output() datesUpdated = new Subject<{startDate: Dayjs, endDate: Dayjs}>()
  @Input() selectedDate: {startDate: Dayjs, endDate: Dayjs} | undefined = undefined;

  constructor() { }

  // Function to get the start and end dates for a specific range
  getDateRange(range: string): [any, any]{
    let endDate = new Date();  // End date is always today

    switch (range) {
      case 'Today':
        let startDateToday = new Date(endDate);
        startDateToday.setHours(0, 0, 0, 0); // Set to beginning of the day
        return [startDateToday, endDate];

      case 'Yesterday':
        let startDateYesterday = new Date(endDate);
        startDateYesterday.setDate(endDate.getDate() - 1);
        startDateYesterday.setHours(0, 0, 0, 0); // Set to beginning of the day
        endDate.setDate(endDate.getDate() - 1);
        endDate.setHours(23, 59, 59, 999); // Set to end of the day
        return [startDateYesterday, endDate];

      case 'Last 7 Days':
        let startDateLast7Days = new Date(endDate);
        startDateLast7Days.setDate(endDate.getDate() - 6);
        startDateLast7Days.setHours(0, 0, 0, 0); // Set to beginning of the day
        return [startDateLast7Days, endDate];

      case 'Last 30 Days':
        let startDateLast30Days = new Date(endDate);
        startDateLast30Days.setDate(endDate.getDate() - 29);
        startDateLast30Days.setHours(0, 0, 0, 0); // Set to beginning of the day
        return [startDateLast30Days, endDate];

      case 'This Month':
        let startDateThisMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
        let endDateThisMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0);
        endDateThisMonth.setHours(23, 59, 59, 999); // Set to end of the day
        return [startDateThisMonth, endDateThisMonth];

      case 'Last Month':
        let startDateLastMonth = new Date(endDate.getFullYear(), endDate.getMonth() - 1, 1);
        let endDateLastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        endDateLastMonth.setHours(23, 59, 59, 999); // Set to end of the day
        return [startDateLastMonth, endDateLastMonth];

        default: 
        let a = new Date(endDate);
        a.setHours(0, 0, 0, 0); // Set to beginning of the day
        return [a, endDate];
    }
  }

}
