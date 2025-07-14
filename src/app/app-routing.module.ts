import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'counter',
    loadComponent: () => import('./counter/counter.component').then(m => m.CounterComponent),
  },
    {
    path: 'demo',
    loadComponent: () => import('./selectdemo/selectdemo.component').then(m => m.SelectdemoComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
