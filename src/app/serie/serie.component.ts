import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  standalone: false
})
export class SerieComponent implements OnInit {

  listaSeries: Serie[] = [];
  promedioTemporadas: number = 0;
  serieSeleccionada: Serie | null = null;

  constructor(private servicioSeries: SerieService) {}

  ngOnInit(): void {
    this.cargarSeries();
  }

  cargarSeries(): void {
    this.servicioSeries.getSeries().subscribe({
      next: (datos) => {
        this.listaSeries = datos;
        this.actualizarPromedioTemporadas();
      },
      error: (e) => {
        console.error('No se pudieron cargar las series:', e);
      }
    });
  }

  actualizarPromedioTemporadas(): void {
    const cantidadSeries = this.listaSeries.length;

    if (cantidadSeries === 0) {
      this.promedioTemporadas = 0;
      return;
    }

    const sumaTemporadas = this.listaSeries
      .map(s => s.seasons)
      .reduce((acumulado, actual) => acumulado + actual, 0);

    this.promedioTemporadas = parseFloat((sumaTemporadas / cantidadSeries).toFixed(2));
  }

  seleccionarSerie(serie: Serie): void {
    this.serieSeleccionada = serie;
  }

}

