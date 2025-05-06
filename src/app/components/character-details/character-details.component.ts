import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from '../../model/class/interface/rickAndMorty';
import { RickAndyMortyService } from '../../service/rick-andy-morty.service';
import { DeferBlockBehavior } from '@angular/core/testing';

@Component({
  selector: 'app-character-details',
  imports: [],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit{
  
  character!:ICharacter;
  rickAndMortyService = inject(RickAndyMortyService);
  constructor(private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.getCharacterDetails(this.route.snapshot.params['id']);
  }

  getCharacterDetails(id:number): void {
    // Logic to fetch character details using the id
    this.rickAndMortyService.getCharacterById(id).subscribe((character: ICharacter) => {
      this.character = character;
      debugger;
      if(this.character.gender === 'Male'){
        this.character.gender = 'Masculino';
      }else if(this.character.gender === 'Female'){
        this.character.gender = 'Femenino';
      }else{
        this.character.gender = 'Desconhecido';
      }

      if(this.character.status === 'Alive'){
        this.character.status = 'Vivo';
      }else if(this.character.status === 'Dead'){
        this.character.status = 'Morto';
      }
      else{
        this.character.status = 'Desconhecido';
      }
    });
    
    }

}
