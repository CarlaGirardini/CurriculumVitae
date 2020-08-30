import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  initialMessage = 'Flag icons design by';
  connector = 'from';

  constructor() { }

  ngOnInit(): void {
  }

}
