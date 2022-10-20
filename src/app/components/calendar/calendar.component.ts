import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public atualDate = new Date();
  public selectedYear: number = this.atualDate.getFullYear();
  public selectedMonth: number = this.atualDate.getMonth();

  public months: string[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];
  public days: string[] = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo"
  ];

  public calendarDays: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.mountCalendarDays();
  }

  previousMonth(){
    if(this.selectedMonth === 0){
      this.selectedYear--;
      this.selectedMonth = 11;
    }else{
      this.selectedMonth--;
    }
    
    this.mountCalendarDays();
  }

  nextMonth(){
    if(this.selectedMonth === 11){
      this.selectedYear++;
      this.selectedMonth = 0;
    }else{
      this.selectedMonth++;
    }

    this.mountCalendarDays();
  }

  daysInMonth(month: number) {
    var data = new Date(this.selectedYear, (month + 1), 0);
    return data.getDate();
  }

  mountCalendarDays(){
    this.calendarDays = [];

    var daysInPreviousMonth = this.daysInMonth(this.selectedMonth - 1);
    var daysInNextMonth = this.daysInMonth(this.selectedMonth + 1);
    var fistWeekDay = new Date(this.selectedYear, this.selectedMonth, 1).getDay();

    // setting days of previous month
    for(var i = (daysInPreviousMonth - fistWeekDay + 1); i<= daysInPreviousMonth; i++){
      this.calendarDays.push(new Date(this.selectedYear, (this.selectedMonth - 1), i));
    }

    // setting days of selected month
    for(var i = 1; i<= this.daysInMonth(this.selectedMonth); i++){
      this.calendarDays.push(new Date(this.selectedYear, this.selectedMonth, i));
    }

    // setting days of next month
    for(var i = 1; i<= daysInNextMonth; i++){
      this.calendarDays.push(new Date(this.selectedYear, (this.selectedMonth + 1), i));
    }
  }
}
