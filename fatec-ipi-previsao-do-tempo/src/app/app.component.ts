import { Component , Output, EventEmitter} from '@angular/core';
import { Previsao } from '../app/model/previsao';
import { PrevisoesService } from './previsoes.service';
import { Cidade } from './model/cidade';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// cidade: Cidade = new Cidade();
cidade: string;

 previsoes: Previsao[];


 adicionarCidade(cidadeForm){
   const cidade = cidadeForm.value.cidade;
   console.log(`Cidade:${cidade}`);
  }

/*
  constructor(private previsoesService: PrevisoesService) {
    previsoesService.obterPrevisoes().subscribe((previsoes) => {
      this.previsoes = previsoes['list'];
      console.log(this.previsoes);
      });
  }*/


  constructor(private previsoesService: PrevisoesService) {
    previsoesService.obterPrevisoes(this.cidade).subscribe((previsoes) => {
      this.previsoes = previsoes['list'];
      console.log(this.previsoes);
      });
  }

/*  constructor(private previsoesService: PrevisoesService) {
    this.previsoes = previsoesService.obterPrevisoes();
    }*/

}
