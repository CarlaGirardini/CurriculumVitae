import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  age: number = this.calculateAge();
  data = [
    {
      key: 'Surname',
      value: 'Girardini'
    },
    {
      key: 'Names',
      value: 'Carla Micaela'
    },
    {
      key: 'Date of birth',
      value: 'October 16th 1992'
    },
    {
      key: 'Age',
      value: `${this.age} years old`
    },
    {
      key: 'Marital status',
      value: 'Single'
    },
    {
      key: 'Nationality',
      value: 'Argentinean\nItalian'
    },
    {
      key: 'Languages',
      value: ' Spanish (native) \n English (advanced) \n Italian (basic)'
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  calculateAge(): number{
    let age;
    const birthYear = 1992;

    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();
    const currentYear = today.getFullYear();

    age = currentYear - birthYear;
    console.log('age', age);
    if (currentMonth < 10){ age--; }
    if (currentMonth === 10 && currentDate < 16){ age--; }

    return age;
  }

  navigate(endpoint: string){
    this.router.navigate([`/${endpoint}`]);
  }
}
