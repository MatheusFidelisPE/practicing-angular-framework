import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ICharacter } from '../model/class/interface/rickAndMorty';

@Injectable({
  providedIn: 'root'
})
export class RickAndyMortyService {

  constructor(private httpClient:HttpClient) { }

  getCharacterCount():Observable<number>{
    return this.httpClient.get<any>(environment.API_RICKANDMORTY_URL + 'character').pipe
    (
      map((response: any) => {
        return response.info.count;
      })
    );
  }
  getEpisodeCount():Observable<number>{
    return this.httpClient.get<any>(environment.API_RICKANDMORTY_URL + 'episode').pipe
    (
      map((response: any) => {
        return response.info.count;
      })
    );
  }
  getLocationCount():Observable<number>{
    return this.httpClient.get<any>(environment.API_RICKANDMORTY_URL + 'location').pipe
    (
      map((response: any) => {
        return response.info.count;
      })
    );
  }
  getNumberOfCharacterPages():Observable<number>{
    return this.httpClient.get<any>(environment.API_RICKANDMORTY_URL + 'character').pipe
    (
      map((response: any) => {
        return response.info.pages;
      })
    );
  }
  getFirstCharacter():Observable<ICharacter>{
    return this.httpClient.get<any>(environment.API_RICKANDMORTY_URL + 'character').pipe
    (
      map((response: any) => {
        return response.results[0];
      })
    );
  }
  getTheMostRelevantCharacters():Observable<ICharacter[]>{
    return this.httpClient.get<any>(environment.API_RICKANDMORTY_URL + 'character').pipe
    (
      map((response: any) => {
        return response.results.filter((character: ICharacter) => character.episode.length > 1).slice(0, 15);
      })
    );
  }
  getCharacterById(id: number): Observable<ICharacter> {
    return this.httpClient
    .get<ICharacter>(`${environment.API_RICKANDMORTY_URL}character/${id}`);
  }

}
