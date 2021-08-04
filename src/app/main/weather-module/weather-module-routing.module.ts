import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherWidgetMainComponent } from './weather-widget-main/weather-widget-main.component';

const routes: Routes = [
  {
    path: 'report',
    component: WeatherWidgetMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherModuleRoutingModule { }
