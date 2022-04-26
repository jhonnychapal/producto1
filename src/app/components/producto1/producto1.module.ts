import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Producto1RoutingModule } from './producto1-routing.module';
import { Producto1Component } from './producto1.component';
import { OtraPantallaComponent } from './otra-pantalla/otra-pantalla.component';


@NgModule({
  declarations: [
    Producto1Component,
    OtraPantallaComponent
  ],
  imports: [
    CommonModule,
    Producto1RoutingModule
  ]
})
export class Producto1Module { }
