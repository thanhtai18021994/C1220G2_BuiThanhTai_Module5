import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;
  @Input()
  Seconds: number;
  constructor() { }

  ngOnInit(): void {
    this.remainingTime = this.Seconds;
  }

  ngOnDestroy(): void {
  }
  clearTimer() {}
  stop(){}
  reset(){}
  private countDown() {
  }
}
