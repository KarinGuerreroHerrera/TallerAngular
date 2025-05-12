import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';

@NgModule({
  declarations: [SerieComponent],
  imports: [
    // Arreglo de modulos que necesita
    CommonModule
  ],
  exports: [SerieComponent]
})
export class SerieModule { }
