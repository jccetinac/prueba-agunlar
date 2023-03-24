import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from '../services/api.service';
import { CardInfoComponent } from './components/cards/cardInfo/cardInfo.component';
import { CelsiusPipe } from '../pipes/celsius.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, CardInfoComponent, CelsiusPipe],
  providers: [HttpClient, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
