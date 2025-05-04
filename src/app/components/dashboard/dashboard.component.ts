import { Component, inject, input, Input, OnInit } from '@angular/core';
import { RickAndyMortyService } from '../../service/rick-andy-morty.service';
import { ICharacter } from '../../model/class/interface/rickAndMorty';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  nCharacters: number = 0;
  nEpisodes: number= 0;
  nLocations: number = 0;
  firstCharacter!: ICharacter;

  rickAndyMortyService = inject(RickAndyMortyService);
  ngOnInit(): void {
    this.rickAndyMortyService.getCharacterCount().subscribe((data: number) => {
      this.nCharacters = data;
    });
    this.rickAndyMortyService.getEpisodeCount().subscribe((data: number) => {
      this.nEpisodes = data;
    });
    this.rickAndyMortyService.getLocationCount().subscribe((data: number) => {
      this.nLocations = data;
    });
    this.getFirstCharacter();

  }

  getFirstCharacter():void{
    this.rickAndyMortyService.getFirstCharacter().subscribe((data: any) => {
      this.firstCharacter = data;
    });

  }






}
