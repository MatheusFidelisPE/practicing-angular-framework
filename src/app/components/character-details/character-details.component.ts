import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  imports: [],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit{
  
  
  constructor(private route:ActivatedRoute){}
  
  ngOnInit(): void {
    console.log('ID: ' + this.route.snapshot.paramMap.get('id'));
  }

}
