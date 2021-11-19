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

  nextMonth(){
    if(this.selectedMonth === 11){
      this.selectedMonth = 0;
      return;
    }

    this.selectedMonth = this.selectedMonth + 1;
  }

  previousMonth(){
    if(this.selectedMonth === 0){
      this.selectedMonth = 11;
      return;
    }

    this.selectedMonth = this.selectedMonth - 1;
  }

  daysInMonth() {
    var data = new Date(this.selectedYear, this.selectedMonth+1, 0);
    return data.getDate();
  }

  mountCalendarDays(){
    for(var i = 1; i<= this.daysInMonth(); i++){
      this.calendarDays.push({
        day: i, 
        dayInWeek: new Date(this.selectedYear, this.selectedMonth, i).getDay()
      });
    }
  }
}
