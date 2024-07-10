import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stats-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  @Input() data: number = 230;
  @Input() dataUpBy: number = 10;
  @Input() isPercent = false;
  @Input() isCurrency = false;

  constructor() { }

  ngOnInit(): void {
  }

}
