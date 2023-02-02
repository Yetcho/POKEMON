import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  constructor(private http: HttpClient ) { 
    getPokemons() {
      this.http.get('https://pokeapi.co/api/v2/pokemon')
    }
  }
}

