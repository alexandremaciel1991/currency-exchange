import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exchange-rate-now',
  templateUrl: './exchange-rate-now.component.html',
  styleUrls: ['./exchange-rate-now.component.scss'],
})
export class ExchangeRateNowComponent {
  @Input() toSymbol!: string;
  @Input() fromSymbol!: string;
  @Input() exchangeRate!: number;
  @Input() lastUpdatedAt!: string;
}
