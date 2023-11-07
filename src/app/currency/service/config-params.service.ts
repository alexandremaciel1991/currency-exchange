import { Injectable } from '@angular/core';
import { ConfigParams } from '../models/config-params';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigParamsService {
  constructor() {}

  configParams(config: ConfigParams): HttpParams {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('to_symbol', config.to_symbol);
    httpParams = httpParams.set('from_symbol', config.from_symbol);
    return httpParams;
  }
}
