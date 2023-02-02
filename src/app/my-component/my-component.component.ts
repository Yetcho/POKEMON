import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  id: string = '';
  selectedPokeId : string ='';
  searchPokeName : string ='';

  pokes:Pokemon[]=[];

  constructor(){
    this.pokes.push(new Pokemon('1', "tata"));
    this.pokes.push(new Pokemon('2', "bulbasaur"));
    this.pokes.push(new Pokemon('3', "ivysaur"));
    this.pokes.push(new Pokemon('4', "venusaur"));
    this.pokes.push(new Pokemon('5', "charmander"));


  }
  ngOnInit(): void{

  }
  go(){
    console.log(this.selectedPokeId);
  }

}
