import { Component, Input } from '@angular/core';
import { DataCurrentDailyExchangeRate } from '../../models/current-daily-exchange-rate';

@Component({
  selector: 'app-previous-days',
  templateUrl: './previous-days.component.html',
  styleUrls: ['./previous-days.component.scss'],
})
export class PreviousDaysComponent {
  panelOpenState: boolean = false;
  @Input() exchangeRate!: number;
  @Input() data!: DataCurrentDailyExchangeRate[];

  getCloseDiff(currentValue: number): number {
    let percent = (100 * currentValue) / this.exchangeRate - 100;

    return parseFloat(percent.toFixed(2));
  }
}
