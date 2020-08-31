import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  workExperience = [
    {
      companyName: 'MobyDigital',
      position: 'Desarrolladora web front-end',
      period: '5 de junio 2020 a la fecha',
      others: ''
    },
    {
      companyName: 'Seabury Solutions',
      position: 'Desarrolladora web junior',
      period: '6 de enero 2020 a 03 de abril 2020',
      others: ''
    },
    {
      companyName: 'Observatorio Astronómico de Córdoba',
      position: 'Encargada Telescopio de los Estudiantes',
      period: 'Diciembre 2015 a abril 2019',
      others: ''
    },
    {
      companyName: 'Estación Astrofísica de Bosque Alegre',
      position: 'Atención de visitas diurnas y nocturnas',
      period: 'Agosto 2014 a enero 2019',
      others: ''
    },
    {
      companyName: 'University of Texas Rio Grande Valley',
      position: 'Exchange visitor - staff',
      period: 'Marzo a julio 2018',
      others: 'Center for Gravitational Wave Astronomy'
    },
    {
      companyName: 'Grupo de Astrometría y Fotometría',
      position: 'Directora general',
      period: 'Diciembre 2017 a diciembre 2018',
      others: 'Observatorio Astronómico de Córdoba'
    },
    {
      companyName: 'Grupo de Astrometría y Fotometría',
      position: 'Coordinadora de talleres',
      period: 'Diciembre 2015 a diciembre 2017',
      others: 'Observatorio Astronómico de Córdoba'
    },
    {
      companyName: 'Grupo de Astrometría y Fotometría',
      position: 'Capacitadora',
      period: '2014 a 2017',
      others: 'Observatorio Astronómico de Córdoba'
    },
    {
      companyName: 'Observatorio Astronómico de Córdoba',
      position: 'Beca observacional',
      period: 'Marzo 2015 a abril 2017',
      others: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
