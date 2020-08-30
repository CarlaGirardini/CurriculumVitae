import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  age: number = this.calculateAge();
  data = [
    {
      key: 'Apellido',
      value: 'Girardini'
    },
    {
      key: 'Nombres',
      value: 'Carla Micaela'
    },
    {
      key: 'Fecha de nacimiento',
      value: this.datePipe.transform(new Date(1992, 9, 16), 'longDate')
      // 'October 16th 1992'
    },
    {
      key: 'Edad',
      value: `${this.age} años`
    },
    {
      key: 'Estado civil',
      value: 'Soltera'
    },
    {
      key: 'Nacionalidad',
      value: 'Argentina, \nitaliana'
    },
    {
      key: 'Idiomas',
      value: ' Español (nativo), \n Inglés (avanzado), \n Italiano (básico)'
    },
  ];

  constructor(
    private router: Router,
    private datePipe: DatePipe
    ) {}

  ngOnInit(): void {}

  calculateAge(): number{
    let age;
    const birthYear = 1992;

    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();
    const currentYear = today.getFullYear();

    age = currentYear - birthYear;
    if (currentMonth < 10){ age--; }
    if (currentMonth === 10 && currentDate < 16){ age--; }

    return age;
  }

  navigate(endpoint: string){
    this.router.navigate([`/${endpoint}`]);
  }
}
