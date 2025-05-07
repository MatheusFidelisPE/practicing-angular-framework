import { Component, inject, input, Input, OnInit } from '@angular/core';
import { RickAndyMortyService } from '../../service/rick-andy-morty.service';
import { ICharacter } from '../../model/class/interface/rickAndMorty';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  imports: [DatePipe, RouterModule, CommonModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  nCharacters: number = 0;
  nEpisodes: number= 0;
  nLocations: number = 0;
  firstCharacter!: ICharacter;
  mostRelevantCharacters!: ICharacter[];
  searchByUsername: FormControl = new FormControl();
  charactersFiltered !: Observable<String[]>;
  characters: string[] = ['São Paulo', 'Rio de Janeiro', 'Recife', 'Fortaleza', 'Belo Horizonte'];
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
    this.getTheMostRelevantCharacteres();
    this.getFirstCharacter();
    this.charactersFiltered = this.searchByUsername.valueChanges.pipe(
      startWith(''),
      map(value => this._filtrarCharacters(value || ''))
    );
  }

  getFirstCharacter():void{
    this.rickAndyMortyService.getFirstCharacter().subscribe((data: any) => {
      this.firstCharacter = data;
    });
  }
  getTheMostRelevantCharacteres():void{
    this.rickAndyMortyService.getTheMostRelevantCharacters().subscribe((data: any) => {
      this.mostRelevantCharacters = data;
    });
  }
  private _filtrarCharacters(valor: string): string[] {
    const filtro = valor.toLowerCase();
    return this.characters.filter(character => character.toLowerCase().includes(filtro));
  }





}
