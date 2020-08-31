import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio = [
    {
      title: 'Acámica: CV Online',
      description:
        'Proyecto de la carrera "Desarrollo web full stack" de Acámica.',
      objective: 'Aprender los conceptos básicos de maquetado y estilado.',
      technologies: ['HTML5', 'CSS3'],
      repository: 'https://github.com/CarlaGirardini/Acamica-DWFS-001_CVOnline',
      deploy: 'https://carlagirardini.github.io/Acamica-DWFS-001_CVOnline/'
    },
    {
      title: 'Acámica: Home Banking',
      description:
        'Proyecto de la carrera "Desarrollo web full stack" de Acámica.',
      objective: 'Aprender los conceptos básicos de programación con JavaScript.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      repository: 'https://github.com/CarlaGirardini/Acamica-DWFS-002_HomeBanking',
      deploy: ''
    },
    {
      title: 'Acámica: Rompecabezas',
      description:
        'Proyecto de la carrera "Desarrollo web full stack" de Acámica.',
      objective: 'Aprender los conceptos básicos de arreglos de datos.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      repository: 'https://github.com/CarlaGirardini/Acamica-DWFS-003_Rompecabezas',
      deploy: 'https://carlagirardini.github.io/Acamica-DWFS-003_Rompecabezas/'
    },
    {
      title: 'Acámica: Pixel Art',
      description:
        'Proyecto de la carrera "Desarrollo web full stack" de Acámica.',
      objective: 'Aprender los conceptos básicos de manipulación del DOM.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      repository: 'https://github.com/CarlaGirardini/Acamica-DWFS-004_PixelArt',
      deploy: 'https://carlagirardini.github.io/Acamica-DWFS-004_PixelArt/'
    },
    {
      title: 'Acámica: Ciudad Zombie',
      description:
        'Proyecto de la carrera "Desarrollo web full stack" de Acámica.',
      objective: 'Aprender los conceptos básicos de Programación Orientada a Objetos.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      repository: 'https://github.com/CarlaGirardini/Acamica-DWFS-005_CiudadZombie',
      deploy: 'https://carlagirardini.github.io/Acamica-DWFS-005_CiudadZombie/'
    },
    {
      title: 'Acámica: Reservando',
      description:
        'Proyecto de la carrera "Desarrollo web full stack" de Acámica.',
      objective: 'Aprender los conceptos básicos de testing y TDD.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Mocha', 'Chai'],
      repository: 'https://github.com/CarlaGirardini/Acamica-DWFS-006_Reservando',
      deploy: ''
    },
    {
      title: 'Acámica: Encuestados',
      description:
        'Proyecto de la carrera "Desarrollo web full stack" de Acámica.',
      objective: 'Aprender los conceptos básicos de MVC.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      repository: 'https://github.com/CarlaGirardini/Acamica-DWFS-007_Encuestados',
      deploy: ''
    },
    {
      title: 'Acámica: Que veo hoy',
      description:
        'Proyecto de la carrera "Desarrollo web full stack" de Acámica.',
      objective: 'Aprender los conceptos básicos de programación back-end con Node.js y Express.js.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js'],
      repository: 'https://github.com/CarlaGirardini/Acamica-DWFS-009_Que_veo_hoy',
      deploy: ''
    },
    {
      title: 'Acámica: Peli VS Peli',
      description:
        'Proyecto de la carrera "Desarrollo web full stack" de Acámica.',
      objective: 'Aprender los conceptos básicos de bases de datos con MySQL.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'],
      repository: 'https://github.com/CarlaGirardini/Acamica-DWFS-010_Peli_VS_Peli',
      deploy: ''
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
