import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "todo",
    loadChildren: () => import('./todo/todo.module').then(m=> m.TodoModule)
  },
  {
    path: 'weather',
    loadChildren: ()=> import('./weather-module/weather-module.module').then(m=> m.WeatherModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
