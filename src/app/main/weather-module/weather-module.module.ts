import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherModuleRoutingModule } from './weather-module-routing.module';
import { FormsModule } from '@angular/forms';
import { WeatherWidgetMainComponent } from './weather-widget-main/weather-widget-main.component';


@NgModule({
  declarations: [
    WeatherWidgetMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WeatherModuleRoutingModule,
  ]
})
export class WeatherModuleModule { }
