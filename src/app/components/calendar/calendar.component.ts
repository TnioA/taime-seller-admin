import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public atualDate = new Date();
  public selectedMonth: number = this.atualDate.getMonth();
  public selectedDay: number = this.atualDate.getDay();

  public months: string[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
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
  

  constructor() { }

  ngOnInit(): void {
  }

  nextMonth(){
    if(this.selectedMonth === 11){
      this.selectedMonth = 1;
      return;
    }

    this.selectedMonth = this.selectedMonth + 1;
  }

  previousMonth(){
    if(this.selectedMonth === 1){
      this.selectedMonth = 11;
      return;
    }

    this.selectedMonth = this.selectedMonth - 1;
  }

}
