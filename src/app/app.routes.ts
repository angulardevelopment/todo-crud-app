import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'counter',
    loadComponent: () => import('./counter/counter.component').then(m => m.CounterComponent),
  },
    {
    path: 'demo',
    loadComponent: () => import('./selectdemo/selectdemo.component').then(m => m.SelectdemoComponent),
  }
];

