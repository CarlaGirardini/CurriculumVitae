import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  formalStudies = [
    {
      level: 'Escuela primaria',
      period: '1999 - 2004',
      institution: 'Instituto Don Orione. Córdoba Capital, Provincia de Córdoba',
      status: 'Completo',
      others: 'Segunda escolta Bandera Nacional'
    },
    {
      level: 'Escuela secundaria',
      period: '2005 - 2010',
      institution:
        'Instituto Nuestra Señora de la Misericordia. Alta Gracia, Provincia de Córdoba',
      status: 'Completo',
      others: 'Bachiller con orientación en Ciencias Naturales, especialidad en Salud y Ambiente. Primera escolta Bandera Nacional'
    },
    {
      level: 'Universidad',
      period: '2011 - 2018',
      institution:
        'Universidad Nacional de Córdoba - Facultad de Matemática, Astronomía, Física y Computación. Córdoba Capital, Provincia de Córdoba',
      status: 'Incompleto',
      others: ''
    }
  ];

  courses = [
    {
      title: 'Desarrollo web full stack',
      period: 'Junio 2019 a Marzo 2020',
      institution: 'Acámica',
      status: 'Completo',
      notes: ''
    },
    {
      title: 'Protocolo e imagen personal',
      period: '24 de mayo de 2012',
      institution: 'Confederación argentina de la mediana empresa',
      status: 'Completo',
      notes: 'Jornada de 8 horas de capacitación'
    },
    {
      title: 'Key English Test (KET)',
      period: 'Diciembre 2010',
      institution: 'University of Cambridge. ESOL Examinations',
      status: 'Completo',
      notes: 'Certificado de inglés nivel A2'
    },
    {
      title: 'R.C.P.C. Adulto – Niño – Bebé',
      period: 'Junio 2008',
      institution: 'Fundación S.E.C. Y E.R.T. - Socorrismo emergencias Córdoba',
      status: 'Completo',
      notes: 'Jornadas de Reanimación y Resucitación artificial cardiopulmonar y cerebral – R.C.P.C. Adulto – Niño – Bebé'
    },
    {
      title: 'Capacitación en emergencias pre-hospitalarias',
      period: 'Octubre 2008',
      institution: 'Fundación S.E.C. Y E.R.T. - Socorrismo emergencias Córdoba',
      status: 'Completo',
      notes: 'Jornadas sobre heridas y hemorragias de distintos tipos'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
