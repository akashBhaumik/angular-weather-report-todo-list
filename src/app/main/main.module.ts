import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { WeatherModuleModule } from './weather-module/weather-module.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoModule } from './todo/todo.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MainRoutingModule,
    WeatherModuleModule,
    TodoModule
  ]
})
export class MainModule { }
