import { Component } from '@angular/core';
import { CurrencyService } from '../../service/currency.service';
import { ConfigParams } from '../../models/config-params';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrentExchangeRate } from '../../models/current-exchange-rate';
import { forkJoin } from 'rxjs';
import { CurrentDailyExchangeRate } from '../../models/current-daily-exchange-rate';
import { SnackBarService } from 'src/app/shared/components/snack-bar/snack-bar.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent {
  toSymbol: string = 'BRL';
  fromSymbol!: string;
  configParams!: ConfigParams;
  currentExchangeRate!: CurrentExchangeRate;
  currentDailyExchangeRate!: CurrentDailyExchangeRate;
  formCurrency!: FormGroup;
  loading: boolean = false;

  constructor(
    private currencyService: CurrencyService,
    private formBuilder: FormBuilder,
    private snackBar: SnackBarService
  ) {}

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm() {
    this.formCurrency = this.formBuilder.group({
      fromSymbol: ['', Validators.required],
    });
  }

  getCurrency() {
    this.loading = true;
    if (this.formCurrency.touched && this.formCurrency.dirty) {
      this.configParams = {
        from_symbol:
          this.formCurrency.controls['fromSymbol'].value.toUpperCase(),
        to_symbol: this.toSymbol,
      };

      const currentExchangeRateService =
        this.currencyService.getCurrentExchangeRate(this.configParams);

      const currentDailyExchangeRateService =
        this.currencyService.getDailyExchangeRate(this.configParams);

      forkJoin({
        currentExchangeRate: currentExchangeRateService,
        currentDailyExchangeRate: currentDailyExchangeRateService,
      }).subscribe({
        next: (res) => {
          if (
            res.currentExchangeRate.success &&
            res.currentDailyExchangeRate.success
          ) {
            this.currentExchangeRate = res.currentExchangeRate;
            this.currentDailyExchangeRate = res.currentDailyExchangeRate;
          } else {
            this.snackBar.openSnackBar('Ocorreu um erro!');
          }
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.snackBar.openSnackBar('Ocorreu um erro!');
          this.loading = false;
        },
      });
    }
  }
}
