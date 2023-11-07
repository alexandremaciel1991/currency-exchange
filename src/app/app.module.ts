import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { HeaderComponent } from './commom/components/header/header.component';
import { CurrencyModule } from './currency/currency.module';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SnackBarComponent } from './shared/components/snack-bar/snack-bar.component';
import { FooterComponent } from './commom/components/footer/footer.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [AppComponent, HeaderComponent, SnackBarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CurrencyModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-Br' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
