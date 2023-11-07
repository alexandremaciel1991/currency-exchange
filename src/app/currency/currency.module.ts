import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './components/currency/currency.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { CurrencyRoutingModule } from './currency-routing.module';
import { ExchangeRateNowComponent } from './components/exchange-rate-now/exchange-rate-now.component';
import { PreviousDaysComponent } from './components/previous-days/previous-days.component';
import { PreviousCardsComponent } from './components/previous-cards/previous-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CurrencyInterceptor } from './currency.interceptor';

@NgModule({
  declarations: [
    CurrencyComponent,
    ExchangeRateNowComponent,
    PreviousDaysComponent,
    PreviousCardsComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CurrencyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CurrencyInterceptor, multi: true },
  ],
})
export class CurrencyModule {}
