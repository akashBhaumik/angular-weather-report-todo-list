import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherModuleRoutingModule } from './weather-module-routing.module';
import { FormsModule } from '@angular/forms';
import { WeatherWidgetMainComponent } from './weather-widget-main/weather-widget-main.component';
import { ShareModule } from 'src/app/shared/share/share.module';


@NgModule({
  declarations: [
    WeatherWidgetMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WeatherModuleRoutingModule,
    ShareModule
  ]
})
export class WeatherModuleModule { }
