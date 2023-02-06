import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersServiceService {

  constructor(public _httpClient : HttpClient) { }

  listCharacters(search : any, page : number){
    let url = 'https://rickandmortyapi.com/api/character';

    if(search){
      url = `${url}/?name=${search}`
    }else if(page){
      url = `${url}/?page=${page}`
    }
    

    return this._httpClient.get(url);

  }
}
