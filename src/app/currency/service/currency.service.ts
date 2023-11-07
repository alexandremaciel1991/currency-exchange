import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';
import { ConfigParams } from '../models/config-params';
import { ConfigParamsService } from './config-params.service';
import { CurrentExchangeRate } from '../models/current-exchange-rate';
import { Observable } from 'rxjs';
import { CurrentDailyExchangeRate } from '../models/current-daily-exchange-rate';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService extends HttpBaseService {
  private endpointCurrentExchangeRate = 'currentExchangeRate';
  private endpointDailyExchangeRate = 'dailyExchangeRate';
  constructor(
    protected override readonly injector: Injector,
    private configParams: ConfigParamsService
  ) {
    super(injector);
  }

  getCurrentExchangeRate(
    config: ConfigParams
  ): Observable<CurrentExchangeRate> {
    const params = this.configParams.configParams(config);
    return this.httpGet(`${this.endpointCurrentExchangeRate}`, params);
  }

  getDailyExchangeRate(
    config: ConfigParams
  ): Observable<CurrentDailyExchangeRate> {
    const params = this.configParams.configParams(config);
    return this.httpGet(`${this.endpointDailyExchangeRate}`, params);
  }
}
