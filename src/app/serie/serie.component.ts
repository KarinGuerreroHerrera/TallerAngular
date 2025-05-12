import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service'

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
  standalone: false
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  promedio_series: number = 0;
  selectedSerie: Serie | null = null;

  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe({
      next: (series) => {
        this.series = series;
        this.calculateSeasonsAverage();
      },
      error: (error) => {
        console.error('Error fetching series:', error);
      }
    });
  }

  calculateSeasonsAverage() {
    if (this.series.length === 0) return;
    
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.promedio_series = Number((totalSeasons / this.series.length).toFixed(2));
  }

  onSeriesClick(serie: Serie) {
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }
}
