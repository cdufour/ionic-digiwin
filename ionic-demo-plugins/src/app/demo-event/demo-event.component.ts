import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'demo-event',
  templateUrl: './demo-event.component.html',
  styleUrls: ['./demo-event.component.scss'],
})
export class DemoEventComponent implements OnInit {
  @Input() title: string = "";
  @Input() numbers: number[] = [];
  @Output() onNotify: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick(): void {
    this.onNotify.emit("coucou, mon chiffre favori est le: " + this.numbers[0]);
  }

}
